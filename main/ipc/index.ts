import { ipcMain, type WebContents } from 'electron'
import { type profile as Profile } from 'msmc'
import { getProfile } from './profile'

export interface Data {
  profile: Profile
  nftwToken: string
}

export const initHandlers = (webContents: WebContents, data: Data) => {
  ipcMain.handle('profile:get', async () => getProfile(data))
}
