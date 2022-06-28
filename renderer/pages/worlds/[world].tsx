import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '~/components/layout/Layout'
import {
  Center,
  Left,
  Right,
  WingedLayout,
} from '~/components/layout/WingedLayout'
import { WorldHeader } from '~/components/layout/WorldHeader'
import { NewItems } from '~/components/side/NewItems'
import { Overview } from '~/components/side/Overview'
import { Tags } from '~/components/side/Tags'
import { useWorlds } from '~/lib/hooks/useWorlds'
import { dummyItems } from '..'

const World: NextPage = () => {
  const { query } = useRouter()
  const { worlds } = useWorlds()

  const worldId = Number.parseInt(query.world! as string, 10)
  const world = worlds?.find(x => x.id === worldId)

  if (worlds === undefined) return null
  if (!world) {
    if (typeof window === 'undefined') return null
    throw new Error('world not found')
  }

  return (
    <Layout scroll>
      <WorldHeader world={world} />

      <WingedLayout>
        <Left>
          <Overview world={world} />
          <Tags world={world} />
        </Left>

        <Center>Center</Center>

        <Right>
          {/* TODO: Populate with actual data */}
          <NewItems items={dummyItems} />
        </Right>
      </WingedLayout>
    </Layout>
  )
}

export default World
