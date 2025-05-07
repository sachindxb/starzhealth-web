'use client'

import { useEffect } from 'react'
import Button from '@/components/common/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="mb-6">
            <svg
              className="w-16 h-16 text-red-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            We apologize for the inconvenience. An unexpected error has occurred.
            Our team has been notified and is working to fix the issue.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6">
              <p className="text-red-600 font-mono text-sm">
                Error: {error.message}
              </p>
              {error.digest && (
                <p className="text-gray-500 font-mono text-sm">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              onClick={() => reset()}
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
            >
              Return Home
            </Button>
          </div>

          <div className="text-gray-600">
            <p>If the problem persists, please</p>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              contact our support team
            </a>
          </div>

          {/* Emergency Notice */}
          <div className="mt-8 p-4 bg-red-50 rounded-lg inline-block">
            <p className="text-red-800 font-medium">
              For medical emergencies, please call
            </p>
            <a
              href="tel:911"
              className="text-red-800 text-xl font-bold hover:text-red-900"
            >
              911
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}