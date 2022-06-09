import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../components/layout/Layout'

const World: NextPage = () => {
  const { query } = useRouter()
  const world = query.world

  return <Layout>World: {world}</Layout>
}

export default World
