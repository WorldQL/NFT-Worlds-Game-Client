import { type FC, useCallback } from 'react'
import { Modal } from '~/components/layout/Modal'

interface Props {
  visible: boolean

  state: string | undefined
  task: string | undefined
  progress: number | undefined
}

export const LaunchModal: FC<Props> = ({ visible, state, task, progress }) => {
  const noOp = useCallback(() => {
    // No-op
  }, [])

  return (
    <Modal visible={visible} setVisible={noOp} title='Launching Minecraft'>
      {/* TODO: Make pretty */}
      <pre>{JSON.stringify({ state, task, progress }, null, 2)}</pre>
    </Modal>
  )
}
