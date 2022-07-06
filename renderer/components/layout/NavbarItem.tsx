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

  return <Link href={href}>{children}</Link>
}
