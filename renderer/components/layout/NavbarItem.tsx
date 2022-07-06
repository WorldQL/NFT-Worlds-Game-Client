import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useMemo } from 'react'

interface Props {
  href: string
  exact?: boolean
}

export const NavbarItem: FC<PropsWithChildren<Props>> = ({
  href,
  exact = true,
  children,
}) => {
  const { pathname } = useRouter()
  const active = useMemo(() => {
    if (!exact) return pathname.startsWith(href)
    return pathname === href
  }, [href, pathname, exact])

  return (
    <Link href={href}>
      <a
        className={clsx(
          'h-full flex flex-col justify-center',
          active && 'border-b-2 border-t-2 border-t-transparent'
        )}
      >
        {children}
      </a>
    </Link>
  )
}
