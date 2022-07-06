import { clsx } from 'clsx'
import { type FC, useCallback, useMemo, useState } from 'react'
import { Arrow } from '~/components/svg/Arrow'
import { Check } from '~/components/svg/Check'

export type DisplayHandler<T extends Record<string, string>> = (
  value: keyof T,
  options: T
) => string

interface Props<T extends Record<string, string>> {
  options: T
  value: keyof T

  display?: DisplayHandler<T>
  onChange: (value: keyof T) => void
}

export const Dropdown = <T extends Record<string, string>>({
  options,
  value,
  display,
  onChange,
}: Props<T>): ReturnType<FC> => {
  const [open, setOpen] = useState<boolean>(false)

  const transform = useCallback(
    (value: keyof T) => {
      if (typeof display === 'function') return display(value, options)

      return options[value]
    },
    [options, display]
  )

  const handleMouseOver = useCallback(() => setOpen(true), [setOpen])
  const handleMouseOut = useCallback(() => setOpen(false), [setOpen])

  const handleClick = useCallback<Props<T>['onChange']>(
    value => {
      if (typeof onChange === 'function') onChange(value)
    },
    [onChange]
  )

  const selected = useMemo<string>(() => transform(value), [value, transform])
  return (
    <div className='w-[var(--card-width)] relative font-semibold z-10'>
      <div
        className={clsx(
          'w-full px-6 py-4',
          'bgblur cursor-pointer',
          'flex items-center',
          'border border-white border-opacity-20',
          !open && 'rounded-full',
          open && 'rounded-t-[28px] rounded-b-none border-b-0 shadow-none',
          open &&
            '!backdrop-blur-[var(--blur-amount-fix)] backdrop-brightness-[var(--brightness)]'
        )}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <span className='grow'>{selected}</span>
        <Arrow />
      </div>

      {open && (
        <div
          className={clsx(
            'absolute w-full rounded-b-[28px] bgblur',
            'flex flex-col gap-2',
            'border border-white border-opacity-20 border-t-0'
          )}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className='h-1 border-t border-neutral-100 border-opacity-20' />

          {Object.keys(options).map(key => (
            <DropdownItem
              key={key}
              value={key}
              display={transform(key)}
              active={key === value}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface ItemProps<T extends Record<string, string>> {
  value: keyof T
  display: string
  active: boolean

  onClick: (value: keyof T) => void
}

export const DropdownItem = <T extends Record<string, string>>({
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
      className='px-6 py-3 hover:bg-blur-light bg-opacity-50 last:rounded-b-[28px] last:pb-4 cursor-pointer flex items-center'
      onClick={handleClick}
    >
      <span className='grow'>{display}</span>
      {active && <Check />}
    </div>
  )
}
