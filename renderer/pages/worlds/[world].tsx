import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '~/components/layout/Layout'
import { WorldHeader } from '~/components/layout/WorldHeader'
import { useWorlds } from '~/lib/hooks/useWorlds'

const World: NextPage = () => {
  const { query } = useRouter()
  const { worlds } = useWorlds()

  const worldId = Number.parseInt(query.world! as string, 10)
  const world = worlds?.find(x => x.id === worldId)

  if (!world) {
    if (typeof window === 'undefined') return null
    throw new Error('world not found')
  }

  return (
    <Layout>
      <WorldHeader world={world} />
    </Layout>
  )
}

export default World
