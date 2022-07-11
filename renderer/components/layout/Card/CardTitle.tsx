import { clsx } from 'clsx'
import { type CSSProperties, type FC, type PropsWithChildren } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

export const CardTitle: FC<PropsWithChildren<Props>> = ({
  className,
  style,
  children,
}) => (
  <div
    style={style}
    className={clsx(
      'z-10',
      'rounded-t-3xl bg-blur-light shadow-lg',
      'border border-white border-opacity-20',
      className
    )}
  >
    {children}
  </div>
)
