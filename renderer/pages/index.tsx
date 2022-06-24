import { type NextPage } from 'next'
import { Layout } from '~/components/layout/Layout'
import {
  Center,
  Left,
  Right,
  WingedLayout,
} from '~/components/layout/WingedLayout'
import { WorldHeaderCarousel } from '~/components/layout/WorldHeaderCarousel'
import { WorldGallery } from '~/components/worlds/WorldGallery'
import { useWorlds } from '~/lib/hooks/useWorlds'

const Root: NextPage = () => {
  const { worlds } = useWorlds()
  if (!worlds) return null

  return (
    <Layout scroll>
      <WorldHeaderCarousel />

      <WingedLayout>
        <Left>left</Left>

        <Center>
          <WorldGallery title='Recently Updated' worlds={worlds} />
          <WorldGallery title='Fun Games' worlds={worlds} />
          <WorldGallery title='Battle Royale Games' worlds={worlds} />
        </Center>

        <Right>right</Right>
      </WingedLayout>
    </Layout>
  )
}

export default Root
