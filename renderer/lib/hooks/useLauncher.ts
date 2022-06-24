import { useCallback } from 'react'
import { createGlobalState } from 'react-hooks-global-state'
import { launch as launchGame, type LaunchOptions } from '~/lib/ipc/launch'
import { useProfile } from './useProfile'
import { useWorlds, type World } from './useWorlds'

interface GlobalState {
  running: boolean
}

const initialState: GlobalState = {
  running: false,
}

const { useGlobalState } = createGlobalState(initialState)
export { useGlobalState }

export const useLauncher = (world: World) => {
  const { profile } = useProfile()
  const { worlds } = useWorlds()
  const [running, setRunning] = useGlobalState('running')

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

    setRunning(true)
    void launchGame(profile.user, options, world, worlds)
  }, [world, profile, worlds, setRunning])

  return { launch, running }
}