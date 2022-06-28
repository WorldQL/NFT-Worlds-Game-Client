import { type FC, type PropsWithChildren } from 'react'

export const SettingsNav: FC<PropsWithChildren> = ({ children }) => (
  <div className='z-10 font-semibold px-8 py-4 rounded-t-3xl flex gap-8 bg-blur-light shadow-lg'>
    {children}
  </div>
)
