import { type NextPage } from 'next'
import { Loadout } from '~/components/inventory/Loadout'
import { LoadoutContainer } from '~/components/inventory/LoadoutContainer'
import { LoadoutItems } from '~/components/inventory/LoadoutItems'
import { SkinPreview } from '~/components/inventory/SkinPreview'
import { Layout } from '~/components/layout/Layout'

const Inventory: NextPage = () => (
  <Layout scroll>
    <LoadoutContainer>
      <Loadout />

      <SkinPreview />

      <LoadoutItems />
    </LoadoutContainer>
  </Layout>
)

export default Inventory
