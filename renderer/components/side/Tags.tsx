import { type FC, type PropsWithChildren } from 'react'
import { type World } from '~/lib/data/worlds'
import { SideContent } from './SideContent'

interface Props {
  world: World
}

export const Tags: FC<Props> = ({ world }) => (
  <SideContent className='text-sm flex flex-col gap-3'>
    <TagContainer title='Genre'>
      <Tag>Shooter</Tag>
      <Tag>First Person</Tag>
    </TagContainer>

    <TagContainer title='Features'>
      <Tag>Co-op</Tag>
      <Tag>Single Player</Tag>
      <Tag>Multiplayer</Tag>
    </TagContainer>
  </SideContent>
)

interface TagContainerProps {
  title: string
}

const TagContainer: FC<PropsWithChildren<TagContainerProps>> = ({
  title,
  children,
}) => (
  <>
    <h3 className='font-semibold'>{title}:</h3>
    <div className='flex flex-wrap gap-2'>{children}</div>
  </>
)

const Tag: FC<PropsWithChildren> = ({ children }) => (
  <span className='bg-neutral-700 rounded px-2 py-1'>{children}</span>
)
