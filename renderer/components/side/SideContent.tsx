import { clsx } from 'clsx'
import { type CSSProperties, type FC, type PropsWithChildren } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

export const SideContent: FC<PropsWithChildren<Props>> = ({
  className,
  style,
  children,
}) => (
  <div
    className={clsx(
      'p-4 border-b-2 border-black border-opacity-30 last:border-0',
      className
    )}
    style={style}
  >
    {children}
  </div>
)
