import { useCallback, useEffect, useMemo } from 'react'
import { getEnv } from '~/lib/env'
import { useGlobalState } from '~/lib/hooks/useLauncher'
import { type EventHandler, launchEvents } from '~/lib/ipc/launch'

export const useLaunchEvents = () => {
  const [launching, setLaunching] = useGlobalState('launching')
  const [, setRunning] = useGlobalState('running')

  const [launchStatus, setLaunchStatus] = useGlobalState('launchStatus')
  const [task, setLaunchTask] = useGlobalState('launchTask')
  const [progress, setLaunchProgress] = useGlobalState('launchProgress')

  const onOpen = useCallback<EventHandler<'open'>>(() => {
    setLaunching(false)
    setRunning(true)

    setLaunchStatus(undefined)
    setLaunchTask(undefined)
    setLaunchProgress(undefined)
  }, [
    setLaunching,
    setRunning,
    setLaunchStatus,
    setLaunchTask,
    setLaunchProgress,
  ])

  const onClose = useCallback<EventHandler<'close'>>(() => {
    setRunning(false)

    setLaunchStatus(undefined)
    setLaunchTask(undefined)
    setLaunchProgress(undefined)
  }, [setRunning, setLaunchStatus, setLaunchTask, setLaunchProgress])

  const onData = useCallback<EventHandler<'data'>>(async message => {
    const env = await getEnv()
    if (env.isDev) console.log(message)
  }, [])

  const onDebug = useCallback<EventHandler<'debug'>>(async message => {
    const env = await getEnv()
    if (env.isDev) console.log(message)
  }, [])

  const onUpdate = useCallback<EventHandler<'update'>>(
    (message, percentage) => {
      setLaunchStatus(message)
      setLaunchTask(undefined)
      setLaunchProgress(percentage * 100)
    },
    [setLaunchStatus, setLaunchTask, setLaunchProgress]
  )

  const onProgress = useCallback<EventHandler<'progress'>>(
    (type, task, total) => {
      if (launchStatus !== 'Downloading Minecraft') return
      setLaunchTask(`${type} [${task} / ${total}]`)
    },
    [launchStatus, setLaunchTask]
  )

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

  const status = useMemo<string | undefined>(
    () => (launching ? launchStatus ?? 'Preparing to Launch' : undefined),
    [launching, launchStatus]
  )

  return { launching, status, task, progress }
}
