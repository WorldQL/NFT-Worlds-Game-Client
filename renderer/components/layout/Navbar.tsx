import Link from 'next/link'
import { type FC } from 'react'

export const Navbar: FC = () => (
  <nav className='min-h-[4rem] mt-8 py-2 px-5 flex items-center gap-8 bg-neutral-600 rounded-full text-xl'>
    <div className='flex-grow'>&lt;logo&gt;</div>

    <Link href='/'>Home</Link>
    <Link href='/worlds'>Worlds</Link>
    <Link href='/settings'>Settings</Link>

    <div className='flex-grow text-right'>&lt;user dropdown&gt;</div>
  </nav>
)
