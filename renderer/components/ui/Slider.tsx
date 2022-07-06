import { clsx } from 'clsx'
import {
  type ChangeEventHandler,
  type CSSProperties,
  type FC,
  useCallback,
  useMemo,
} from 'react'

export type ChangeHandler = (value: number) => void
interface Props {
  min: number
  max: number
  step?: number | 'any'

  value: number
  onChange: ChangeHandler
}

export const Slider: FC<Props> = ({ min, max, step, value, onChange }) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ev => {
      if (typeof onChange === 'function') onChange(ev.target.valueAsNumber)
    },
    [onChange]
  )

  const width = useMemo<string>(() => {
    const percentage = (value - min) / (max - min)
    const inverse = 1 - percentage

    return `${inverse * 100}%`
  }, [value, min, max])

  return (
    <div className='relative flex'>
      <input
        className={clsx(
          'w-full outline-none appearance-none bg-transparent',
          'slider-thumb:appearance-none slider-thumb:h-6 slider-thumb:w-5',
          'slider-thumb:bg-gradient-to-b slider-thumb:from-bg-top slider-thumb:to-bg-bottom',
          'slider-thumb:rounded slider-thumb:shadow-main'
        )}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />

      <div
        className={clsx(
          '-z-10 absolute flex',
          'left-0 right-0 mx-2',
          'top-0 bottom-0 my-[4px]',
          'rounded pointer-events-none',
          'border border-neutral-600 border-opacity-100'
        )}
      >
        <div
          className='absolute -z-10 right-0 w-full h-full bg-neutral-800'
          style={{ width }}
        />

        <div className='absolute -z-20 rounded w-full h-full bg-gradient-to-r from-cta-green to-cta-cyan shadow-slider' />
      </div>
    </div>
  )
}
