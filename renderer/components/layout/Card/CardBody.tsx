import clsx from 'clsx'
import { type CSSProperties, type FC, type PropsWithChildren } from 'react'

interface Props {
  noTitle?: boolean

  className?: string
  style?: CSSProperties
}

export const CardBody: FC<PropsWithChildren<Props>> = ({
  noTitle,
  className,
  style,
  children,
}) => (
  <div
    style={style}
    className={clsx(
      'grow',
      'border-white border-opacity-20',
      !noTitle && 'border-x border-b rounded-b-3xl',
      noTitle && 'border rounded-3xl',
      className
    )}
  >
    {children}
  </div>
)
