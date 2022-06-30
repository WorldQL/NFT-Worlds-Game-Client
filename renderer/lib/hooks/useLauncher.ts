import { useCallback } from 'react'
import { createGlobalState } from 'react-hooks-global-state'
import { launch as launchGame, type LaunchOptions } from '~/lib/ipc/launch'
import { useProfile } from './useProfile'
import { useWorlds, type World } from './useWorlds'

interface GlobalState {
  launching: boolean
  running: boolean

  launchState: string | undefined
  launchTask: string | undefined
  launchProgress: number | undefined
}

const initialState: GlobalState = {
  launching: false,
  running: false,

  launchState: undefined,
  launchTask: undefined,
  launchProgress: undefined,
}

const { useGlobalState } = createGlobalState(initialState)
export { useGlobalState }

export const useLauncher = (world: World) => {
  const { profile } = useProfile()
  const { worlds } = useWorlds()

  const [, setLaunching] = useGlobalState('launching')
  const [running, setRunning] = useGlobalState('running')

  const [, setLaunchState] = useGlobalState('launchState')
  const [, setLaunchTask] = useGlobalState('launchState')
  const [, setLaunchProgress] = useGlobalState('launchProgress')

  const launch = useCallback(() => {
    if (running) return

    if (!profile) throw new Error('profile is undefined')
    if (!worlds) throw new Error('worlds is undefined')

    // TODO: use actual user-defined options
    const options: LaunchOptions = {
      memory: {
        min: '1G',
        max: '4G',
      },

      enableShaders: false,
    }

    setLaunching(true)
    setRunning(true)

    setLaunchState(undefined)
    setLaunchTask(undefined)
    setLaunchProgress(undefined)

    void launchGame(profile.user, options, world, worlds)
  }, [
    world,
    profile,
    worlds,
    running,
    setLaunching,
    setRunning,
    setLaunchState,
    setLaunchTask,
    setLaunchProgress,
  ])

  return { launch, running }
}
