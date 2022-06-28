import clsx from 'clsx'
import { type CSSProperties, type FC, type PropsWithChildren } from 'react'

interface Props {
  side: 'left' | 'right'
  fit?: boolean

  className?: string
  style?: CSSProperties
}

const Side: FC<PropsWithChildren<Props>> = ({
  side,
  fit,
  className,
  style,
  children,
}) => (
  <div
    className={clsx(
      'w-[var(--card-width)] bgblur',
      side === 'left' && 'rounded-l-3xl',
      side === 'right' && 'rounded-r-3xl',
      fit && 'h-max',
      className
    )}
    style={style}
  >
    <div
      className={clsx(
        'w-[var(--card-width)] bg-blur-light',
        side === 'left' && 'rounded-l-3xl',
        side === 'right' && 'rounded-r-3xl',
        !fit && 'h-full',
        fit && 'h-max',
        className
      )}
      style={style}
    >
      {children}
    </div>
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
