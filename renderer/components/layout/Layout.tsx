import { type FC, type PropsWithChildren } from 'react'
import { Navbar } from './Navbar'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className='h-full flex flex-col mx-[var(--pad)]'>
    <Navbar />
    <div className='h-full flex flex-col'>{children}</div>
  </div>
)
