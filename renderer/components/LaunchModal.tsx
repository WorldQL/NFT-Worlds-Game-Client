import { type FC, useCallback } from 'react'
import { Modal } from '~/components/layout/Modal'

interface Props {
  visible: boolean

  status: string | undefined
  task: string | undefined
  progress: number | undefined
}

export const LaunchModal: FC<Props> = ({ visible, status, task, progress }) => {
  const noOp = useCallback(() => {
    // No-op
  }, [])

  return (
    <Modal visible={visible} setVisible={noOp} title='Launching Minecraft'>
      <h2>Status</h2>
      <p>{status}</p>

      {/* TODO: Make pretty */}
      <pre>{JSON.stringify({ status, task, progress }, null, 2)}</pre>
    </Modal>
  )
}
