import clsx from 'clsx'
import { type CSSProperties, type FC, type PropsWithChildren } from 'react'

interface Props {
  side: 'left' | 'right'

  className?: string
  style?: CSSProperties
}

export const Side: FC<PropsWithChildren<Props>> = ({
  side,
  className,
  style,
  children,
}) => (
  <div
    className={clsx(
      'p-4 w-[var(--card-width)] bg-blur-2 backdrop-blur-[var(--blur-amount)]',
      side === 'left' && 'rounded-l-3xl',
      side === 'right' && 'rounded-r-3xl',
      className
    )}
    style={style}
  >
    {children}
  </div>
)
