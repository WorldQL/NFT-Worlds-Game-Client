import Link from 'next/link'
import { type FC } from 'react'

export const Navbar: FC = () => (
  <nav>
    <Link href='/'>Home</Link>
    <Link href='/worlds'>Worlds</Link>
    <Link href='/settings'>Settings</Link>
  </nav>
)
