import { type FC, useCallback, useMemo } from 'react'
import { Modal } from '~/components/layout/Modal'
import { type GlobalState } from '~/lib/hooks/useLauncher'

interface Props {
  visible: boolean

  status: GlobalState['launchStatus']
  task: GlobalState['launchTask']
  progress: GlobalState['launchProgress']
}

export const LaunchModal: FC<Props> = ({ visible, status, task, progress }) => {
  const noOp = useCallback(() => {
    // No-op
  }, [])

  const percentage = useMemo<string | undefined>(
    () => progress?.toFixed(0),
    [progress]
  )

  const title = useMemo<string>(() => {
    const title = 'Launching Minecraft'
    if (!percentage) return title

    return `${title} ${percentage}%`
  }, [percentage])

  return (
    <Modal visible={visible} setVisible={noOp} title={title}>
      <h2 className='font-semibold mb-2'>Status</h2>
      <p className='text-sm'>
        {status}
        {task ? (
          <>
            &nbsp;<span className='capitalize'>{task.type}</span> ({task.task} /{' '}
            {task.total})
          </>
        ) : null}
      </p>
    </Modal>
  )
}
