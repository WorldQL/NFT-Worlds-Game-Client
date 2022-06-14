import axios from 'axios'

export interface World {
  worldId: number
  name: string
  description: string
  branding: Branding
  social: unknown // TODO: Proper typedef
  connection: Connection
  javaOnline: boolean
  bedrockOnline: boolean
  playersOnline: number
  maxOnline: number
  javaPlayersOnline: number
  javaPlayersMax: number
  bedrockPlayersOnline: number
  bedrockPlayersMax: number
  lastUpdated: number
}

export interface Branding {
  icon: string
  banner: string
}

export interface Connection {
  address: string
  port: string | number
  consolePort: number
}
export const fetchWorlds = async () => {
  const { data } = await axios.get<readonly World[]>(
    'https://status-api.nftworlds.com/latest'
  )

  return data
}
