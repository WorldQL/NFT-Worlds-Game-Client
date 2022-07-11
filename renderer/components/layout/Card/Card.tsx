import { clsx } from 'clsx'
import { type CSSProperties, type FC, type PropsWithChildren } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

export const Card: FC<PropsWithChildren<Props>> = ({
  className,
  style,
  children,
}) => (
  <div
    style={style}
    className={clsx('isolate bgblur rounded-3xl flex flex-col', className)}
  >
    {children}
  </div>
)
