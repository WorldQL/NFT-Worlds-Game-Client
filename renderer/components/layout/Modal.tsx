import { clsx } from 'clsx'
import {
  type Dispatch,
  type FC,
  type MouseEventHandler,
  type PropsWithChildren,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { Card, CardBody, CardTitle } from '~/components/layout/Card'
import { ButtonPrimary } from '~/components/ui/ButtonPrimary'

export type CloseOrFn = 'close' | (() => void)
export interface Props {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>

  title: string
  button?: string

  onButtonClick?: CloseOrFn
  onOuterClick?: CloseOrFn
  onEsc?: CloseOrFn
}

const Modal: FC<PropsWithChildren<Props>> = ({
  visible,
  setVisible,
  title,
  button,
  onButtonClick,
  onOuterClick,
  onEsc,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = useCallback(() => {
    if (onButtonClick === 'close') setVisible(false)
    if (typeof onButtonClick === 'function') onButtonClick()
  }, [setVisible, onButtonClick])

  const handleOuterClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    ev => {
      if (!containerRef.current) return

      const isOuter = ev.target === containerRef.current
      if (!isOuter) return

      if (onOuterClick === 'close') setVisible(false)
      if (typeof onOuterClick === 'function') onOuterClick()
    },
    [setVisible, onOuterClick]
  )

  const handleEsc = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== 'Escape') return

      if (onEsc === 'close') setVisible(false)
      if (typeof onEsc === 'function') onEsc()
    },
    [setVisible, onEsc]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [handleEsc])

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
      <Card
        className={clsx(
          'w-[50vw] !bg-blur-modal !backdrop-blur-xl shadow-modal transition-opacity',
          !visible && 'pointer-events-none opacity-0',
          visible && 'opacity-100'
        )}
      >
        <CardTitle className='px-6 py-4 shadow-modal-title bg-blur-tint rounded-t-3xl'>
          <h1 className='text-xl font-bold'>{title}</h1>
        </CardTitle>

        <CardBody>
          <div className='px-6 my-6'>{children}</div>

          {button && (
            <div className='pb-6 flex justify-center'>
              <ButtonPrimary type='button' onClick={handleButtonClick}>
                {button}
              </ButtonPrimary>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  )
}

type PortalProps = Props & { portal?: string }

const ModalPortal: FC<PropsWithChildren<PortalProps>> = ({
  portal = '#root',
  children,
  ...props
}) => {
  const container = useMemo(() => {
    const container = document.querySelector(portal)
    if (!container) throw new Error('invalid portal container')

    return container
  }, [portal])

  return createPortal(<Modal {...props}>{children}</Modal>, container)
}

export { ModalPortal as Modal }
