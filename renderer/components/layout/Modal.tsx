import clsx from 'clsx'
import {
  type FC,
  type MouseEventHandler,
  type PropsWithChildren,
  useCallback,
  useRef,
} from 'react'
import { ButtonPrimary } from '../ui/ButtonPrimary'

interface Props {
  visible: boolean
  title: string
  button: string

  onButtonClick?: () => void
  onOuterClick?: () => void
}

export const Modal: FC<PropsWithChildren<Props>> = ({
  visible,
  title,
  button,
  onButtonClick,
  onOuterClick,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = useCallback(() => {
    if (typeof onButtonClick === 'function') onButtonClick()
  }, [onButtonClick])

  const handleOuterClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    ev => {
      if (!containerRef.current) return

      const isOuter = ev.target === containerRef.current
      if (isOuter && typeof onOuterClick === 'function') {
        onOuterClick()
      }
    },
    [onOuterClick]
  )

  return (
    <div
      ref={containerRef}
      className={clsx(
        'fixed z-50 top-0 left-0 rounded-window w-screen h-screen',
        'bg-black transition-all duration-300',
        !visible && 'pointer-events-none bg-opacity-0',
        visible && 'bg-opacity-60',
        'flex items-center justify-center'
      )}
      onClick={handleOuterClick}
    >
      <div
        className={clsx(
          'w-[50vw] bg-blur-modal backdrop-blur-xl rounded-3xl shadow-modal transition-opacity',
          !visible && 'pointer-events-none opacity-0',
          visible && 'opacity-100'
        )}
      >
        <div className='px-6 py-4 shadow-modal-title bg-blur-tint rounded-t-3xl'>
          <h1 className='text-xl font-bold'>{title}</h1>
        </div>

        <div className='px-6 mt-6'>{children}</div>

        <div className='py-6 flex justify-center'>
          <ButtonPrimary type='button' onClick={handleButtonClick}>
            {button}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
