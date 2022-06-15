import clsx from 'clsx'
import { type FC, useCallback, useMemo, useState } from 'react'

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
    <div className='w-[var(--card-width)] relative'>
      <div
        className={clsx(
          'w-full bgblur px-6 py-4 cursor-pointer',
          !open && 'rounded-full',
          open &&
            'rounded-t-[28px] rounded-b-none shadow-none !backdrop-blur-[var(--blur-amount-fix)]'
        )}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {selected}
      </div>

      {open && (
        <div
          className='absolute w-full bgblur flex flex-col gap-2 rounded-b-[28px]'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {Object.keys(options).map(key => (
            <DropdownItem
              key={key}
              value={key}
              display={transform(key)}
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

  onClick: (value: keyof T) => void
}

export const DropdownItem = <T extends Record<string, string>>({
  value,
  display,
  onClick,
}: ItemProps<T>): ReturnType<FC> => {
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') onClick(value)
  }, [value, onClick])

  return (
    <div
      className='px-6 py-3 hover:bg-blur-2 bg-opacity-50 first:mt-2 last:rounded-b-[28px] last:pb-4 cursor-pointer'
      onClick={handleClick}
    >
      {display}
      {/* TODO: Add checkbox icon */}
    </div>
  )
}
