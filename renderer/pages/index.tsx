import { type NextPage } from 'next'
import { Layout } from '~/components/layout/Layout'
import { WorldHeaderCarousel } from '~/components/layout/WorldHeaderCarousel'

const Root: NextPage = () => (
  <Layout>
    <WorldHeaderCarousel />
  </Layout>
)

export default Root
