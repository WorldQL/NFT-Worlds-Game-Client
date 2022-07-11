import { clsx } from 'clsx'
import {
  type CSSProperties,
  type FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Arrow } from '~/components/svg/Arrow'
import { Check } from '~/components/svg/Check'

type Item = string
type Items = Record<string, Item>

export type DisplayHandler<T extends Items> = (
  value: keyof T,
  options: T
) => string

interface Props<T extends Items> {
  options: T
  value: keyof T

  display?: DisplayHandler<T>
  onChange: (value: keyof T) => void

  className?: string
  style?: CSSProperties
}

export const Dropdown = <T extends Items>({
  options,
  value,
  display,
  onChange,
  className,
  style,
}: Props<T>): ReturnType<FC> => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<boolean>(false)

  const autoClose = useCallback(
    (ev: MouseEvent) => {
      if (!open) return
      if (!ref.current) return
      if (!ev.target) return

      const target = ev.target as HTMLElement
      if (target === ref.current) return
      if (target.parentElement === ref.current) return

      setOpen(false)
    },
    [open, setOpen]
  )

  useEffect(() => {
    window.addEventListener('click', autoClose)
    return () => {
      window.removeEventListener('click', autoClose)
    }
  }, [autoClose])

  const transform = useCallback(
    (value: keyof T) => {
      if (typeof display === 'function') return display(value, options)

      return options[value]
    },
    [options, display]
  )

  const handleBodyClick = useCallback(() => setOpen(!open), [open, setOpen])
  const handleItemClick = useCallback<Props<T>['onChange']>(
    value => {
      if (typeof onChange === 'function') onChange(value)
      setOpen(false)
    },
    [onChange, setOpen]
  )

  const selected = useMemo<Item>(() => transform(value), [value, transform])
  return (
    <div style={style} className={clsx('relative isolate z-10', className)}>
      <div
        ref={ref}
        className={clsx(
          'font-semibold px-6 py-4',
          'bgblur rounded-full cursor-pointer',
          'flex items-center',
          'border border-white border-opacity-20'
        )}
        onClick={handleBodyClick}
      >
        <span className='grow'>{selected}</span>

        <Arrow
          className={clsx(
            'transition-transform duration-75',
            open && 'rotate-180'
          )}
        />
      </div>

      <div
        className={clsx(
          'absolute mt-3 top-full left-0 right-0',
          'font-semibold',
          'bgblur rounded-[29px]',
          'border border-white border-opacity-20',
          'transition-opacity',
          !open && 'opacity-0 pointer-events-none',
          open && 'opacity-100'
        )}
      >
        {Object.keys(options).map(key => (
          <DropdownItem
            key={key}
            value={key}
            display={transform(key)}
            active={key === value}
            onClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  )
}

interface ItemProps<T extends Items> {
  value: keyof T
  display: Item
  active: boolean

  onClick: (value: keyof T) => void
}

export const DropdownItem = <T extends Items>({
  value,
  display,
  active,
  onClick,
}: ItemProps<T>): ReturnType<FC> => {
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') onClick(value)
  }, [value, onClick])

  return (
    <div
      className='px-6 py-3 hover:bg-blur-light bg-opacity-50 first:rounded-t-[29px] last:rounded-b-[29px] first:pt-4 last:pb-4 cursor-pointer flex items-center'
      onClick={handleClick}
    >
      <span className='grow'>{display}</span>
      {active && <Check />}
    </div>
  )
}
