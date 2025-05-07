import React from 'react'

interface LoadingProps {
  type?: 'spinner' | 'dots' | 'pulse'
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'white'
  fullScreen?: boolean
  text?: string
  className?: string
}

const Loading: React.FC<LoadingProps> = ({
  type = 'spinner',
  size = 'medium',
  color = 'primary',
  fullScreen = false,
  text,
  className = '',
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  }

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
  }

  const LoadingSpinner = () => (
    <svg
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  const LoadingDots = () => (
    <div className="flex space-x-2">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
          style={{
            animationDelay: `${dot * 0.15}s`,
          }}
        />
      ))}
    </div>
  )

  const LoadingPulse = () => (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
    />
  )

  const loadingTypes = {
    spinner: LoadingSpinner,
    dots: LoadingDots,
    pulse: LoadingPulse,
  }

  const LoadingComponent = loadingTypes[type]

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <LoadingComponent />
      {text && (
        <p className={`mt-2 text-sm ${colorClasses[color]}`}>{text}</p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        {content}
      </div>
    )
  }

  return content
}

export default Loading