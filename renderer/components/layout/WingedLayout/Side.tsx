import clsx from 'clsx'
import { type CSSProperties, type FC, type PropsWithChildren } from 'react'

interface Props {
  side: 'left' | 'right'

  className?: string
  style?: CSSProperties
}

const Side: FC<PropsWithChildren<Props>> = ({
  side,
  className,
  style,
  children,
}) => (
  <div
    className={clsx(
      'w-[var(--card-width)] bg-blur-2 backdrop-blur-[var(--blur-amount)]',
      side === 'left' && 'rounded-l-3xl',
      side === 'right' && 'rounded-r-3xl',
      className
    )}
    style={style}
  >
    {children}
  </div>
)

type SideProps = Omit<Props, 'side'>

export const Left: FC<PropsWithChildren<SideProps>> = ({
  children,
  ...props
}) => (
  <Side side='left' {...props}>
    {children}
  </Side>
)

export const Right: FC<PropsWithChildren<SideProps>> = ({
  children,
  ...props
}) => (
  <Side side='right' {...props}>
    {children}
  </Side>
)
