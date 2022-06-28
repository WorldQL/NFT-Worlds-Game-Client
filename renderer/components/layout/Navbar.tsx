import clsx from 'clsx'
import Link from 'next/link'
import { forwardRef, useMemo } from 'react'
import Logo from '~/assets/svg/logo.svg'
import { Arrow } from '~/components/svg/Arrow'
import { WRLDIcon } from '~/components/svg/WRLDIcon'
import { useProfile } from '~/lib/hooks/useProfile'
import { PlayerHead } from '../PlayerHead'

export const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const { profile } = useProfile()
  const balance = useMemo<string | undefined>(
    () =>
      profile?.wallets.wrldBalance.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      }),
    [profile?.wallets]
  )

  return (
    <nav
      ref={ref}
      className={clsx(
        'absolute top-0 left-0 right-0 z-50',
        'h-[4rem] mt-8',
        'flex items-center',
        'bgblur rounded-full text-xl'
      )}
    >
      <div className='w-[var(--card-width)] pl-5'>
        <img className='h-9' src={Logo.src} />
      </div>

      <div className='flex-grow flex gap-10 justify-center font-semibold'>
        <Link href='/'>Home</Link>
        <Link href='/worlds'>Worlds</Link>
        <Link href='/settings'>Settings</Link>
      </div>

      <div className='h-full w-[var(--card-width)] px-5 rounded-r-full bg-blur-light flex items-center gap-4'>
        <div className='flex grow h-10 gap-4'>
          <PlayerHead profile={profile} className='rounded-full pixelated' />

          <div className='flex flex-col flex-grow text-sm'>
            <div className='font-semibold'>{profile?.user.name}</div>

            <div className='flex items-center'>
              <WRLDIcon className='h-[11px] w-5 mr-[6px]' />
              <span>{balance}</span>
            </div>
          </div>
        </div>

        <Arrow />
      </div>
    </nav>
  )
})
