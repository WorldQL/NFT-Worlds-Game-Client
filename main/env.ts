import { app } from 'electron'
import isDev from 'electron-is-dev'
import path, { join as joinPath } from 'node:path'
import { sync as readPkg } from 'read-pkg-up'

export const IS_DEV = isDev
export const VERSION = readPkg()?.packageJson.version ?? app.getVersion()

const dataDir = '.nftworlds'
const appData = app.getPath('appData')
export const APP_ROOT = IS_DEV
  ? joinPath('.', dataDir)
  : joinPath(appData, dataDir)

export const APP_ROOT_ABSOLUTE = path.resolve(APP_ROOT)
