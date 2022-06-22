import { useCallback, useEffect } from 'react'
import {
  type EventHandler,
  launchEvents,
  launch as launchGame,
  type LaunchOptions,
} from '~/lib/ipc/launch'
import { useProfile } from './useProfile'
import { useWorlds, type World } from './useWorlds'

export const useLauncher = (world: World) => {
  const { profile } = useProfile()
  const { worlds } = useWorlds()

  const launch = useCallback(() => {
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

    void launchGame(profile.user, options, world, worlds)
  }, [world, profile, worlds])

  const onOpen = useCallback<EventHandler<'open'>>(() => {
    // TODO
  }, [])

  const onClose = useCallback<EventHandler<'close'>>(() => {
    // TODO
  }, [])

  const onData = useCallback<EventHandler<'data'>>(() => {
    // TODO
  }, [])

  const onDebug = useCallback<EventHandler<'debug'>>(() => {
    // TODO
  }, [])

  const onUpdate = useCallback<EventHandler<'update'>>(() => {
    // TODO
  }, [])

  const onProgress = useCallback<EventHandler<'progress'>>(() => {
    // TODO
  }, [])

  useEffect(() => {
    launchEvents.addListener('open', onOpen)
    launchEvents.addListener('close', onClose)
    launchEvents.addListener('data', onData)
    launchEvents.addListener('debug', onDebug)
    launchEvents.addListener('update', onUpdate)
    launchEvents.addListener('progress', onProgress)

    return () => {
      launchEvents.removeListener('open', onOpen)
      launchEvents.removeListener('close', onClose)
      launchEvents.removeListener('data', onData)
      launchEvents.removeListener('debug', onDebug)
      launchEvents.removeListener('update', onUpdate)
      launchEvents.removeListener('progress', onProgress)
    }
  }, [onOpen, onClose, onData, onDebug, onUpdate, onProgress])

  return { launch }
}
