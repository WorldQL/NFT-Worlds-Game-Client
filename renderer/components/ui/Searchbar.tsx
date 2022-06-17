import { type ChangeEventHandler, type FC, useCallback, useRef } from 'react'
import { Search } from '~/components/svg/Search'

interface Props {
  value: string
  placeholder?: string

  onChange: (value: string) => void
}

export const Searchbar: FC<Props> = ({ value, placeholder, onChange }) => {
  const ref = useRef<HTMLInputElement>(null)
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ev => {
      if (typeof onChange === 'function') onChange(ev.target.value)
    },
    [onChange]
  )

  const focus = useCallback(() => {
    ref.current?.focus()
  }, [])

  return (
    <div
      className='rounded-full bgblur backdrop-filter-[50px] w-[400px] flex gap-4 items-center cursor-text'
      onClick={focus}
    >
      <input
        ref={ref}
        type='text'
        className='px-6 py-4 rounded-l-full grow bg-transparent outline-none font-medium'
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />

      <Search className='mr-6 pointer-events-none' />
    </div>
  )
}
