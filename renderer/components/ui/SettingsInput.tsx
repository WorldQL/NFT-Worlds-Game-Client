import { clsx } from 'clsx'
import { type FC, type PropsWithChildren, useCallback, useMemo } from 'react'
import { Arrow } from '~/components/svg/Arrow'

interface CommonProps {
  name: string
}

interface BoolProps {
  type: 'bool'
  value: boolean

  formatValue?: (value: boolean) => string
  onChange: (value: boolean) => void
}

interface SelectProps {
  type: 'select'
  value: string
  options: string[]

  formatValue?: (value: string) => string
  onChange: (value: string) => void
}

type Props = CommonProps & (BoolProps | SelectProps)
export const SettingsInput: FC<Props> = ({
  name,
  type,
  value,
  formatValue,
  onChange,
}) => {
  const handlePrevious = useCallback(() => {
    if (typeof onChange !== 'function') return

    if (type === 'bool') {
      onChange(!value)
    } else if (type === 'select') {
      // TODO
    }
  }, [type, value, onChange])

  const handleNext = useCallback(() => {
    if (typeof onChange !== 'function') return

    if (type === 'bool') {
      onChange(!value)
    } else if (type === 'select') {
      // TODO
    }
  }, [type, value, onChange])

  return (
    <div
      className={clsx(
        'rounded-full text-xl font-bold',
        'flex items-center',
        'transition-colors bg-secondary backdrop-blur-[var(--blur-amount)]',
        'border-2 border-secondary-border'
      )}
    >
      <IconContainer side='left' onClick={handlePrevious}>
        <Arrow className='rotate-90' />
      </IconContainer>

      <span className='py-3 grow flex justify-center'>
        {name}:&nbsp;
        {/* Ugly hack to get TypeScript to like it */}
        {type === 'bool' ? (
          <Value type={type} value={value} formatValue={formatValue} />
        ) : (
          <Value type={type} value={value} formatValue={formatValue} />
        )}
      </span>

      <IconContainer side='right' onClick={handleNext}>
        <Arrow className='-rotate-90' />
      </IconContainer>
    </div>
  )
}

interface IconContainerProps {
  side: 'left' | 'right'
  onClick: () => void
}

const IconContainer: FC<PropsWithChildren<IconContainerProps>> = ({
  side,
  onClick,
  children,
}) => (
  <div
    className={clsx(
      'cursor-pointer w-20 h-full flex items-center [--color:rgb(255_255_255_/_8%)] hover:bg-[linear-gradient(var(--deg),var(--color),transparent)]',
      side === 'left' && '[--deg:90deg] pl-6 rounded-l-full',
      side === 'right' && '[--deg:-90deg] justify-end p-6 rounded-r-full'
    )}
    onClick={onClick}
  >
    {children}
  </div>
)

type ValuePickProps = 'type' | 'value' | 'formatValue'
type ValueBoolProps = Pick<BoolProps, ValuePickProps>
type ValueSelectProps = Pick<SelectProps, ValuePickProps>
type ValueProps = ValueBoolProps | ValueSelectProps

const Value: FC<ValueProps> = ({ type, value: rawValue, formatValue }) => {
  const value = useMemo<string>(() => {
    if (type === 'bool') {
      if (typeof formatValue === 'function') return formatValue(rawValue)

      if (rawValue) return 'ON'
      return 'OFF'
    }

    if (typeof formatValue === 'function') return formatValue(rawValue)
    return rawValue
  }, [type, rawValue, formatValue])

  return (
    <span
      className={clsx(
        type === 'bool' && 'font-extrabold bg-clip-text text-transparent',
        type === 'bool' && !rawValue && 'bg-gradient-to-r from-off-1 to-off-2',
        type === 'bool' && rawValue && 'bg-cta-green'
      )}
    >
      {value}
    </span>
  )
}
