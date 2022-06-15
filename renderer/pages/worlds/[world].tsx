import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '~/components/layout/Layout'
import { WorldHeader } from '~/components/layout/WorldHeader'
import { useWorlds } from '~/lib/hooks/useWorlds'

const World: NextPage = () => {
  const { query } = useRouter()
  const { worlds } = useWorlds()

  const worldId = Number.parseInt(query.world! as string, 10)
  const world = worlds?.find(x => x.worldId === worldId)

  if (!world) return null

  return (
    <Layout>
      <WorldHeader world={world} />
    </Layout>
  )
}

export default World
