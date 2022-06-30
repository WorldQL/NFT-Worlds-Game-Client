import clsx from 'clsx'
import { useRouter } from 'next/router'
import { type FC, type PropsWithChildren, useCallback } from 'react'

interface CommonProps {
  disabled?: boolean
  className?: string
}

interface ClickProps {
  type: 'button'
  onClick: () => void

  href?: never
}

interface LinkProps {
  type: 'link'
  href: string

  onClick?: never
}

type Props = CommonProps & (ClickProps | LinkProps)

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  disabled,
  type,
  href,
  onClick,
  className,
}) => {
  const { push } = useRouter()
  const handleClick = useCallback(() => {
    if (type === 'button') {
      if (typeof onClick === 'function') onClick()
    } else {
      void push(href)
    }
  }, [type, href, onClick, push])

  return (
    <button
      className={clsx(
        'w-[var(--card-width)] h-fit px-6 py-4 rounded-full text-lg font-bold outline-none disabled:cursor-not-allowed',
        className
      )}
      type='button'
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

type CommonSubProps = Omit<CommonProps, 'className'>
export type ButtonProps = CommonSubProps & (ClickProps | LinkProps)
