import { clsx } from 'clsx'
import { type FC, type PropsWithChildren } from 'react'
import { Button, type ButtonProps } from './Button'

export const ButtonContextual: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => (
  <Button
    className={clsx(
      'bg-neutral-700 transition-colors hover:bg-neutral-600',
      className
    )}
    {...props}
  >
    {children}
  </Button>
)
