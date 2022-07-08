import { type NextPage } from 'next'
import { Loadout } from '~/components/layout/inventory/Loadout'
import { LoadoutContainer } from '~/components/layout/inventory/LoadoutContainer'
import { LoadoutItems } from '~/components/layout/inventory/LoadoutItems'
import { SkinPreview } from '~/components/layout/inventory/SkinPreview'
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
