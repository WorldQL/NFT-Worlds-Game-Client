import clsx from 'clsx'
import { type FC, type PropsWithChildren, useCallback } from 'react'

export const Titlebar: FC = () => {
  const handleMinimise = useCallback(async () => {
    const { getCurrentWindow } = await import('@electron/remote')
    const win = getCurrentWindow()

    win.minimize()
  }, [])

  const handleClose = useCallback(async () => {
    const { getCurrentWindow } = await import('@electron/remote')
    const win = getCurrentWindow()

    win.close()
  }, [])

  return (
    <div className='w-full h-6 bg-blur-1 backdrop-blur-[var(--blur-amount)] rounded-t-window drag flex items-center'>
      <span className='pl-1 text-xs text-text flex-grow'>NFT Worlds</span>

      <Icon onClick={handleMinimise}>
        <Minimise />
      </Icon>

      <Icon close onClick={handleClose}>
        <Close />
      </Icon>
    </div>
  )
}

interface IconProps {
  close?: boolean
  onClick: () => void
}

const Icon: FC<PropsWithChildren<IconProps>> = ({
  children,
  close,
  onClick,
}) => (
  <div
    className={clsx(
      'h-full flex items-center px-3 cursor-pointer no-drag text-white transition-colors',
      !close && 'hover:bg-neutral-800',
      close && 'hover:bg-red-500'
    )}
    onClick={onClick}
  >
    {children}
  </div>
)

const Close: FC = () => (
  <svg aria-hidden='false' width='12' height='12' viewBox='0 0 12 12'>
    <polygon
      fill='currentColor'
      fillRule='evenodd'
      points='11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1'
    />
  </svg>
)

const Minimise: FC = () => (
  <svg aria-hidden='false' width='12' height='12' viewBox='0 0 12 12'>
    <rect fill='currentColor' width='10' height='1' x='1' y='6' />
  </svg>
)
