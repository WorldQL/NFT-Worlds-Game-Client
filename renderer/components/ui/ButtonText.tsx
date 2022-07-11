import { clsx } from 'clsx'
import { type FC, type PropsWithChildren } from 'react'
import { Arrow } from '~/components/svg/Arrow'
import { Button, type ButtonProps } from './Button'

export const ButtonText: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => (
  <Button className={clsx('w-fit !font-semibold', className)} {...props}>
    <div className='flex items-center gap-2'>
      <span>{children}</span>
      <Arrow className='-rotate-90' />
    </div>
  </Button>
)
