import { type ChangeEventHandler, type FC, useCallback } from 'react'

interface Props {
  value: string
  placeholder?: string

  onChange: (value: string) => void
}

export const Searchbar: FC<Props> = ({ value, placeholder, onChange }) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ev => {
      if (typeof onChange === 'function') onChange(ev.target.value)
    },
    [onChange]
  )

  return (
    <input
      className='rounded-full bgblur backdrop-filter-[50px] px-3 py-4 w-[400px]'
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
