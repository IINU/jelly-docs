import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'rounded-lg transition-all bg-yellow-500 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-yellow-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300/50 active:bg-yellow-500',
  secondary:
    'rounded-lg bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(variantStyles[variant], className)

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
