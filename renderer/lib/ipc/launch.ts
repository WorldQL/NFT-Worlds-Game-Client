import { ipcRenderer } from 'electron'
import { EventEmitter } from 'eventemitter3'
import { type ILauncherOptions as LauncherOptions } from 'minecraft-launcher-core'
import { type profile as Profile } from 'msmc'
import { type World } from '~/lib/data/worlds'

export const convertMemory = (gb: number) => {
  if (gb === 0) return '512M'
  return `${gb}G`
}

export interface LaunchOptions {
  width?: number
  height?: number
  fullscreen?: boolean

  memory: LauncherOptions['memory']

  enableShaders: boolean
}

export const launch = async (
  profile: Profile,
  options: LaunchOptions,
  world: World,
  worlds: ReadonlyArray<Readonly<World>>
) => {
  await ipcRenderer.invoke('launch:launch', profile, options, world, worlds)
}

interface Events {
  // eslint-disable-next-line @typescript-eslint/ban-types
  open: []
  close: [code: number]
  data: [message: string]
  debug: [message: string]
  update: [message: string, percentage: number]
  progress: [type: string, task: number, total: number]
}

export type Event = keyof Events
export type EventHandler<T extends Event> = (...args: Events[T]) => void

class LaunchEvents extends EventEmitter<Events> {
  constructor() {
    super()
    if (typeof window === 'undefined') return

    ipcRenderer.on('launch:@open', () => this.emit('open'))
    ipcRenderer.on('launch:@close', (_, code) => this.emit('close', code))
    ipcRenderer.on('launch:@data', (_, message) => this.emit('data', message))
    ipcRenderer.on('launch:@debug', (_, message) => this.emit('debug', message))
    ipcRenderer.on('launch:@update', (_, message, percentage) =>
      this.emit('update', message, percentage)
    )

    ipcRenderer.on('launch:@progress', (_, type, task, total) =>
      this.emit('progress', type, task, total)
    )
  }
}

export const launchEvents = new LaunchEvents()
