import { type FC, type PropsWithChildren } from 'react'
import { CardBody } from '~/components/layout/Card'

export const SettingsContainer: FC<PropsWithChildren> = ({ children }) => (
  <CardBody className='flex'>{children}</CardBody>
)
