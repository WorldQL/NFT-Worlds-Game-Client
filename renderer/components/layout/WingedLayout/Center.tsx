import clsx from 'clsx'
import { type CSSProperties, type FC, type PropsWithChildren } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

export const Center: FC<PropsWithChildren<Props>> = ({
  className,
  style,
  children,
}) => (
  <div className='grow p-4 bg-blur-1 backdrop-blur-[var(--blur-amount)]'>
    <div className={clsx('-mt-12 -mb-6', className)} style={style}>
      {children}
    </div>
  </div>
)
