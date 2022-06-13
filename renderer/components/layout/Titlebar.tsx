import { type FC, useCallback } from 'react'

export const Titlebar: FC = () => {
  const handleClose = useCallback(async () => {
    const { getCurrentWindow } = await import('@electron/remote')
    const win = getCurrentWindow()

    win.close()
  }, [])

  return (
    <div className='w-full h-6 bg-blur-1 backdrop-blur-[var(--blur-amount)] rounded-t-window drag flex items-center'>
      <span className='pl-1 text-xs text-text flex-grow'>NFT Worlds</span>
      <span
        className='text-text pr-2 cursor-pointer no-drag'
        onClick={handleClose}
      >
        X
      </span>
    </div>
  )
}
