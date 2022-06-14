import Link from 'next/link'
import { type FC } from 'react'
import Arrow from '~/assets/svg/arrow.svg'
import Logo from '~/assets/svg/logo.svg'
import WRLDIcon from '~/assets/svg/wrld_icon.svg'
import { useProfile } from '~/lib/hooks/useProfile'
import { PlayerHead } from '../PlayerHead'

export const Navbar: FC = () => {
  const { profile } = useProfile()

  return (
    <nav className='min-h-[4rem] mt-8 flex items-center bgblur rounded-full text-xl'>
      <div className='w-[var(--card-width)] pl-5'>
        <img className='h-9' src={Logo.src} />
      </div>

      <div className='flex-grow flex gap-10 justify-center'>
        <Link href='/'>Home</Link>
        <Link href='/worlds'>Worlds</Link>
        <Link href='/settings'>Settings</Link>
      </div>

      <div className='h-full w-[var(--card-width)] px-5 rounded-r-full bg-blur-1 flex items-center gap-4'>
        <PlayerHead profile={profile} className='w-8 rounded-full pixelated' />
        <div className='flex flex-col flex-grow text-sm'>
          <div>{profile?.user.name}</div>

          <div className='flex'>
            <img src={WRLDIcon.src} className='w-5 mr-2' />
            <span>{profile?.wallets.wrldBalance}</span>
          </div>
        </div>

        <img src={Arrow.src} />
      </div>
    </nav>
  )
}
