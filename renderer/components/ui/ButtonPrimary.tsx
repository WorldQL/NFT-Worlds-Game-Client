import { clsx } from 'clsx'
import { type FC, type PropsWithChildren } from 'react'
import { Button, type ButtonProps } from './Button'

export const ButtonPrimary: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => (
  <Button
    className={clsx(
      'text-text-action shadow-light',
      'bg-gradient-to-r from-cta-green to-cta-cyan',
      'enabled:hover:bg-gradient-to-l',
      className
    )}
    {...props}
  >
    {children}
  </Button>
)
