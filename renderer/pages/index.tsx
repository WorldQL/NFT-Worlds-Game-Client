import { type NextPage } from 'next'
import { Layout } from '~/components/layout/Layout'
import {
  Center,
  Left,
  Right,
  WingedLayout,
} from '~/components/layout/WingedLayout'
import { WorldHeaderCarousel } from '~/components/layout/WorldHeaderCarousel'
import { type NFTItem } from '~/components/side/Item'
import { NewItems } from '~/components/side/NewItems'
import { ButtonContextual } from '~/components/ui/ButtonContextual'
import { WorldGallery } from '~/components/worlds/WorldGallery'
import { WorldSidebarContainer } from '~/components/worlds/WorldSidebarContainer'
import { useWorlds } from '~/lib/hooks/useWorlds'

// TODO: Replace with actual data
export const dummyItems: readonly NFTItem[] = [
  {
    name: 'Eye of Ender',
    image:
      'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/Blaze_Powder_JE2_BE1.png',
    value: 243_071,
  },
] as const

const Root: NextPage = () => {
  const { worlds } = useWorlds()

  if (!worlds) return null
  return (
    <Layout scroll>
      <WorldHeaderCarousel />

      <WingedLayout>
        <Left>
          <WorldSidebarContainer
            title='Play It Again'
            // TODO: Populate with actual data
            worlds={worlds.slice(0, 3)}
          />

          <WorldSidebarContainer
            title='Top Worlds'
            // TODO: Populate with actual data
            worlds={worlds.slice(3, 20)}
          />
        </Left>

        <Center>
          {/* TODO: Populate with actual data */}
          <WorldGallery title='Recently Updated' worlds={worlds.slice(0, 3)} />
          <WorldGallery title='Fun Games' worlds={worlds.slice(3, 6)} />
          <WorldGallery
            title='Battle Royale Games'
            worlds={worlds.slice(6, 9)}
          />

          <div className='flex flex-col items-center'>
            <ButtonContextual type='link' href='/worlds'>
              Discover More Worlds
            </ButtonContextual>
          </div>
        </Center>

        <Right>
          {/* TODO: Populate with actual data */}
          <NewItems items={dummyItems} />
        </Right>
      </WingedLayout>

      <p className='mt-5 text-center text-xs text-neutral-500'>
        NFT Worlds is in no way associated with, endorsed by, or a partner of
        Minecraft, Mojang, Microsoft or any related parties.
      </p>
    </Layout>
  )
}

export default Root
