import Link from 'next/link'
import { type FC } from 'react'
import Logo from '~/assets/svg/logo.svg'

export const Navbar: FC = () => (
  <nav className='[--dropdown-width:16rem] min-h-[4rem] mt-8 flex items-center bgblur rounded-full text-xl'>
    <div className='w-[var(--dropdown-width)] pl-5'>
      <img className='h-9' src={Logo.src} />
    </div>

    <div className='flex-grow flex gap-10 justify-center'>
      <Link href='/'>Home</Link>
      <Link href='/worlds'>Worlds</Link>
      <Link href='/settings'>Settings</Link>
    </div>

    <div className='h-full w-[var(--dropdown-width)] rounded-r-full bg-blur-1 flex items-center justify-center'>
      &lt;user dropdown&gt;
    </div>
  </nav>
)
