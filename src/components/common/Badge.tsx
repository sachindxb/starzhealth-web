import React from 'react'

interface BadgeProps {
  text: string
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: React.ReactNode
  removable?: boolean
  onRemove?: () => void
  className?: string
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
  size = 'medium',
  rounded = false,
  icon,
  removable = false,
  onRemove,
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-gray-100 text-gray-800',
  }

  const sizeStyles = {
    small: 'text-xs px-2 py-0.5',
    medium: 'text-sm px-2.5 py-1',
    large: 'text-base px-3 py-1.5',
  }

  return (
    <span
      className={`
        inline-flex items-center font-medium
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${rounded ? 'rounded-full' : 'rounded'}
        ${className}
      `}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {text}
      {removable && (
        <button
          onClick={onRemove}
          className={`
            ml-1.5 hover:bg-opacity-20 hover:bg-gray-900
            rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-${variant === 'primary' ? 'blue' : variant}-500
          `}
        >
          <span className="sr-only">Remove</span>
          <svg
            className="h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  )
}

export default Badge