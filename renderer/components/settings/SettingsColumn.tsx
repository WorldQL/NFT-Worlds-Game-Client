import { type FC, type PropsWithChildren } from 'react'

export const SettingsColumn: FC<PropsWithChildren> = ({ children }) => (
  <div className='grow p-6 h-full flex flex-col'>{children}</div>
)
