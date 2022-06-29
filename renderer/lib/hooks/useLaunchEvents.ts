import { useCallback, useEffect } from 'react'
import { getEnv } from '~/lib/env'
import { useGlobalState } from '~/lib/hooks/useLauncher'
import { type EventHandler, launchEvents } from '~/lib/ipc/launch'

export const useLaunchEvents = () => {
  const [running, setRunning] = useGlobalState('running')

  const onOpen = useCallback<EventHandler<'open'>>(() => {
    setRunning(true)
  }, [setRunning])

  const onClose = useCallback<EventHandler<'close'>>(() => {
    setRunning(false)
  }, [setRunning])

  const onData = useCallback<EventHandler<'data'>>(async message => {
    const env = await getEnv()
    if (env.isDev) console.log(message)
  }, [])

  const onDebug = useCallback<EventHandler<'debug'>>(async message => {
    const env = await getEnv()
    if (env.isDev) console.log(message)
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
}
