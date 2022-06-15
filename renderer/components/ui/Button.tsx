import clsx from 'clsx'
import { type FC, type PropsWithChildren, useCallback } from 'react'

interface Props {
  className?: string
  onClick: () => void
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') onClick()
  }, [onClick])

  return (
    <button
      className={clsx(
        'w-[var(--card-width)] h-fit px-6 py-4 rounded-full text-lg font-bold',
        className
      )}
      type='button'
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export type ButtonProps = Omit<Props, 'className'>
