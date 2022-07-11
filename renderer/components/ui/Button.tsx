import { clsx } from 'clsx'
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
export type { Props as ButtonProps }

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
        'w-[var(--card-width)] h-fit px-6 py-4',
        'rounded-full outline-none disabled:cursor-not-allowed',
        'text-lg font-bold',
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
