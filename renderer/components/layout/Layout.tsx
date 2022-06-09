import { type FC, type PropsWithChildren } from 'react'
import { Navbar } from './Navbar'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
  </div>
)
