import { type NextPage } from 'next'
import { Layout } from '~/components/layout/Layout'
import {
  Center,
  Left,
  Right,
  WingedLayout,
} from '~/components/layout/WingedLayout'
import { WorldHeaderCarousel } from '~/components/layout/WorldHeaderCarousel'
import { WorldCard } from '~/components/worlds/WorldCard'
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
          <WorldCard world={worlds[0]} />
        </Center>

        <Right>right</Right>
      </WingedLayout>
    </Layout>
  )
}

export default Root
