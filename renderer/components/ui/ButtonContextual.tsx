import { type FC, type PropsWithChildren } from 'react'
import { Button, type ButtonProps } from './Button'

export const ButtonContextual: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => (
  <Button
    className='bg-neutral-700 transition-colors hover:bg-neutral-600'
    {...props}
  >
    {children}
  </Button>
)
