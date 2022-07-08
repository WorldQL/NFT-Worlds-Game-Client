import { type NextPage } from 'next'
import { ItemSlotPicker } from '~/components/inventory/ItemSlotPicker'
import { Loadout } from '~/components/inventory/Loadout'
import { LoadoutContainer } from '~/components/inventory/LoadoutContainer'
import { SkinPreview } from '~/components/inventory/SkinPreview'
import { Layout } from '~/components/layout/Layout'

const Inventory: NextPage = () => (
  <Layout scroll>
    <LoadoutContainer>
      <Loadout />

      <SkinPreview />

      <ItemSlotPicker />
    </LoadoutContainer>
  </Layout>
)

export default Inventory
