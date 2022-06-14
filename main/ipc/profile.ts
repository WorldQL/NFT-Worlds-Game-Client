import { getWallets } from '../lib/nftWorldsAPI'
import { type Data } from './index'

export const getProfile = async ({ profile, nftwToken }: Data) => {
  const wallets = await getWallets(nftwToken)
  return { profile, wallets }
}
