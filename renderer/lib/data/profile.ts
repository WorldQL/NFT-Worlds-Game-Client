import { ipcRenderer } from 'electron'
import { type profile as AuthProfile } from 'msmc'

export interface Profile {
  user: AuthProfile
  wallets: {
    primaryWalletAddress: string
    secondaryWalletAddresses: string
    wrldBalance: number
  }
}

export const getProfile = async () => {
  const profile = (await ipcRenderer.invoke('profile:get')) as Profile

  return profile
}
