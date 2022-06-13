import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://players-api.nftworlds.com',
})

export interface PlayerAuth {
  id: string
  nftwId: string
  name: string
  accountType: 'java' | 'bedrock'
  accessToken: string
  managedWalletAddress: string
}

export const authorize = async (token: string) => {
  const { data } = await axios.post<PlayerAuth>('/authorizations', {
    providedAccessToken: token,
  })

  return data.accessToken
}

export interface PlayerWallets {
  primaryWalletAddress: string
  secondaryWalletAddresses: string
  wrldBalance: number
}

export const getWallets = async (token: string) => {
  const { data } = await axios.get<PlayerWallets>('/wallets', {
    headers: {
      Authorization: token,
    },
  })

  return data
}
