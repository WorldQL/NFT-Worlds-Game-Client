import { type ChangeEventHandler, type FC, useCallback } from 'react'

interface Props {
  options: readonly string[]
  value: string

  onChange: (value: string) => void
}

export const Dropdown: FC<Props> = ({ options, value, onChange }) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ev => {
      if (typeof onChange === 'function') onChange(ev.target.value)
    },
    [onChange]
  )

  return (
    <select
      className='rounded-full bgblur px-3 py-4 w-[var(--card-width)]'
      value={value}
      onChange={handleChange}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
