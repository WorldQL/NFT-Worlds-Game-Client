import { type FC, type PropsWithChildren } from 'react'
import { Button, type ButtonProps } from './Button'

export const ButtonPrimary: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => (
  <Button
    className='text-text-action shadow-light bg-gradient-to-r enabled:hover:bg-gradient-to-l from-cta-green to-cta-cyan'
    {...props}
  >
    {children}
  </Button>
)
