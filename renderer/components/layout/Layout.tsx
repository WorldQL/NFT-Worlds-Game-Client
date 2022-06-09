import { type FC, type PropsWithChildren } from 'react'
import { Navbar } from './Navbar'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className='h-full flex flex-col mx-[6rem]'>
    <Navbar />
    <div className='h-full'>{children}</div>
  </div>
)
