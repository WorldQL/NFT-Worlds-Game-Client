import { clsx } from 'clsx'
import { type FC, type PropsWithChildren } from 'react'
import { Button, type ButtonProps } from './Button'

export const ButtonSecondary: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => (
  <Button
    className={clsx(
      'transition-colors bg-secondary hover:bg-secondary-hover',
      'shadow-[inset_0_0_0_2px_theme(colors.secondary.border)] backdrop-blur-[var(--blur-amount)]',
      className
    )}
    {...props}
  >
    {children}
  </Button>
)
