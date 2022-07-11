import { type FC, type PropsWithChildren } from 'react'
import { CardTitle } from '~/components/layout/Card'

export const SettingsNav: FC<PropsWithChildren> = ({ children }) => (
  <CardTitle className='font-semibold px-8 py-4 flex gap-8'>
    {children}
  </CardTitle>
)
