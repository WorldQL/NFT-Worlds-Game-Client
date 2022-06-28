import clsx from 'clsx'
import { type FC, type PropsWithChildren, useCallback } from 'react'
import { Close } from '~/components/svg/Close'
import { Minimise } from '~/components/svg/Minimise'

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
    <div className='w-full h-6 bg-blur-light backdrop-blur-[var(--blur-amount)] rounded-t-window drag flex items-center'>
      <span className='pl-1 text-sm font-semibold ml-1 text-text flex-grow'>
        NFT Worlds
      </span>

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
