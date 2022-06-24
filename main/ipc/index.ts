import { ipcMain, type WebContents } from 'electron'
import { type profile as Profile } from 'msmc'
import { launch } from '../lib/launch'
import { getProfile } from './profile'

export interface Data {
  profile: Profile
  nftwToken: string
}

export const initHandlers = (webContents: WebContents, data: Data) => {
  ipcMain.handle('profile:get', async () => getProfile(data))

  // eslint-disable-next-line max-params
  ipcMain.handle('launch:launch', async (_, profile, options, world, worlds) =>
    launch(profile, options, world, worlds, data.nftwToken, webContents)
  )
}
