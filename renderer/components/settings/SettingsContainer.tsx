import { type FC, type PropsWithChildren } from 'react'

export const SettingsContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex h-full'>{children}</div>
)
