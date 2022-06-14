import { type FC, useCallback, useEffect, useMemo, useRef } from 'react'
import { type Profile } from '~/lib/data/profile'

interface Skin {
  id: string
  state: string
  url: string
  variant: string
}

interface Props {
  profile: Profile | undefined
  className?: string
}

export const PlayerHead: FC<Props> = ({ profile, className }) => {
  const ref = useRef<HTMLCanvasElement>(null)
  const skins = profile?.user.skins as readonly Skin[] | undefined
  const skinURL = useMemo<string>(
    () =>
      skins
        ?.find(x => x.state === 'ACTIVE')
        ?.url?.replace('http://', 'https://') ?? 'aaa',
    [skins]
  )

  const avatar = useMemo<HTMLImageElement>(() => {
    // @ts-expect-error SSR Workaround
    if (typeof window === 'undefined') return undefined as HTMLImageElement

    const img = new Image()
    img.src = skinURL

    return img
  }, [skinURL])

  const renderPlayerHead = useCallback(
    (ctx: CanvasRenderingContext2D, avatar: HTMLImageElement) => {
      ctx.drawImage(avatar, 8, 8, 8, 8, 0, 0, 8, 8)
      ctx.drawImage(avatar, 40, 8, 8, 8, 0, 0, 8, 8)
    },
    []
  )

  useEffect(() => {
    const ctx = ref.current?.getContext('2d')
    if (!ctx) return

    if (avatar.complete) {
      renderPlayerHead(ctx, avatar)
      return
    }

    const listener = () => renderPlayerHead(ctx, avatar)
    avatar.addEventListener('load', listener)

    return () => {
      avatar.removeEventListener('load', listener)
    }
  }, [ref, avatar, renderPlayerHead])

  return <canvas ref={ref} width={8} height={8} className={className} />
}
