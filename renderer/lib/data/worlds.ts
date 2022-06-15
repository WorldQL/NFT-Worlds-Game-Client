import axios from 'axios'

interface RawWorld {
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

export interface World {
  id: number
  name: string
  description: string

  branding: Readonly<Branding>
  connection: Readonly<Connection>

  online: boolean
  players: number

  lastUpdated: Date
}

export const fetchWorlds: () => Promise<
  ReadonlyArray<Readonly<World>>
> = async () => {
  const { data } = await axios.get<readonly RawWorld[]>(
    'https://status-api.nftworlds.com/latest'
  )

  const worlds = data.map(raw => {
    const world: World = {
      id: raw.worldId,
      name: raw.name,
      description: raw.description,

      branding: Object.freeze(raw.branding),
      connection: Object.freeze(raw.connection),

      online: raw.javaOnline,
      players: raw.playersOnline,

      lastUpdated: new Date(raw.lastUpdated * 1000),
    }

    return Object.freeze(world)
  })

  return worlds
}
