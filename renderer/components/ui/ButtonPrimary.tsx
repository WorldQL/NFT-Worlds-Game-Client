import { type FC, type PropsWithChildren } from 'react'
import { Button, type ButtonProps } from './Button'

export const ButtonPrimary: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
}) => (
  <Button
    className='text-text-action bg-gradient-to-r hover:bg-gradient-to-l from-cta-green to-cta-cyan'
    onClick={onClick}
  >
    {children}
  </Button>
)
