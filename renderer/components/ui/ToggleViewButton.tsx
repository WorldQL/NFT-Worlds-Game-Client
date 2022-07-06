import { clsx } from 'clsx'
import { type FC, PropsWithChildren, useCallback } from 'react'
import { GalleryView } from '~/components/svg/GalleryView'
import { ListView } from '~/components/svg/ListView'

export type View = 'grid' | 'table'

interface Props {
  view: View
  onChange: (view: View) => void
}

export const ToggleViewButton: FC<Props> = ({ view, onChange }) => {
  const handleGridClick = useCallback(() => {
    if (typeof onChange === 'function') onChange('grid')
  }, [onChange])

  const handleTableClick = useCallback(() => {
    if (typeof onChange === 'function') onChange('table')
  }, [onChange])

  return (
    <div className='flex bgblur rounded-full'>
      <Container side='left' active={view === 'grid'} onClick={handleGridClick}>
        <GalleryView className='h-5 w-auto' />
      </Container>

      <Container
        side='right'
        active={view === 'table'}
        onClick={handleTableClick}
      >
        <ListView className='h-5 w-auto' />
      </Container>
    </div>
  )
}

interface ContainerProps {
  side: 'left' | 'right'
  active: boolean

  onClick: () => void
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({
  side,
  active,
  children,
  onClick,
}) => (
  <div
    className={clsx(
      '[--shadow:rgba(0,0,0,0.2)] flex items-center px-6 cursor-pointer',
      side === 'left' && '[--deg:-90deg] rounded-l-full pr-5',
      side === 'right' && '[--deg:90deg] rounded-r-full pl-5',
      active && 'bg-blur-light',
      !active &&
        'bg-[linear-gradient(var(--deg),var(--shadow),transparent_12%)]'
    )}
    onClick={onClick}
  >
    {children}
  </div>
)
