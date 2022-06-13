import * as remote from '@electron/remote/main'
import { app, BrowserWindow, dialog } from 'electron'
import log from 'electron-log'
import serve from 'electron-serve'
import Store from 'electron-store'
import { autoUpdater } from 'electron-updater'
import { join as joinPath } from 'node:path'
import process from 'node:process'
import { authenticate } from './lib/auth'
import { APP_ROOT, IS_DEV, VERSION } from './lib/env'
// TODO
// import { initHandlers } from './ipc/handler'
// import { getSecureKey } from './lib/encryption'
// Import { exists } from './lib/http'

if (process.platform === 'win32') {
  app.setAppUserModelId('NFT Worlds')
}

const instanceLock = app.requestSingleInstanceLock()
if (!instanceLock) app.quit()

Object.assign(console, log.functions)
log.transports.file.resolvePath = () => joinPath(APP_ROOT, 'logs', 'main.log')

autoUpdater.autoDownload = false
autoUpdater.logger = log

remote.initialize()
Store.initRenderer()

const createWindow = async () => {
  const win = new BrowserWindow({
    title: `NFT Worlds v${VERSION}`,

    width: 1600,
    height: 1000,
    resizable: false,

    frame: false,
    transparent: true,
    show: false,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  win.removeMenu()
  remote.enable(win.webContents)

  const load = async () => {
    if (IS_DEV) {
      const port = process.argv[2]
      await win.loadURL(`http://localhost:${port}/`)

      win.webContents.openDevTools()
    } else {
      await win.loadURL('app://./index.html')
    }

    win.show()
    win.focus()
  }

  return { win, load }
}

const checkForUpdates = async () => {
  if (IS_DEV) return false

  const noUpdateFile = joinPath(APP_ROOT, '.noupdate')
  // TODO
  // const noUpdate = await exists(noUpdateFile)
  // if (noUpdate) return false

  const updates = await autoUpdater.checkForUpdates()
  if (updates === null) return false

  return updates.cancellationToken !== undefined
}

// Serve app in prod
if (!IS_DEV) serve({ directory: 'app' })

void app.whenReady().then(async () => {
  const updateCheckJob = checkForUpdates()

  // TODO
  // // @ts-expect-error Global Assign
  // global.__SECURE_STORE_KEY = getSecureKey()

  const { win, load } = await createWindow()
  // TODO
  const { profile, nftwToken } = await authenticate()
  // TODO
  // initHandlers(win.webContents)
  await load()

  app.on('window-all-closed', () => app.quit())

  autoUpdater.on('download-progress', ({ percent }) => {
    win.setProgressBar(percent / 100, { mode: 'normal' })
  })

  autoUpdater.on('update-downloaded', async () => {
    win.setProgressBar(-1)

    const { response } = await dialog.showMessageBox(win, {
      type: 'info',
      title: win.title,
      message: 'Update Available',
      detail:
        'An update has been downloaded, restart the client to finish installing.',
      buttons: ['Restart Now', 'Restart Later'],
      cancelId: 1,
    })

    if (response === 0) app.quit()
  })

  const hasUpdate = await updateCheckJob
  if (hasUpdate) void autoUpdater.downloadUpdate()
})
