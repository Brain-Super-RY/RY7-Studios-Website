import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const variants = {
    primary: {
      base: 'bg-primary-600 text-white hover:bg-primary-700',
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    },
    secondary: {
      base: 'bg-gray-600 text-white hover:bg-gray-700',
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    },
    outline: {
      base: 'border border-primary-600 text-primary-600 hover:bg-primary-50',
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    },
    text: {
      base: 'text-primary-600 hover:text-primary-700',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  }

  const baseClasses = variants[variant].base
  const sizeClasses = variants[variant][size]

  if (href) {
    return (
      <Link 
        href={href}
        className={`${baseClasses} ${sizeClasses} ${className} rounded-lg font-medium transition-colors`}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${className} rounded-lg font-medium transition-colors`}
    >
      {children}
    </button>
  )
}
