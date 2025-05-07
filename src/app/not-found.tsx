'use client'

import Button from '@/components/common/Button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Please check the URL or navigate back to our homepage.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              onClick={() => window.location.href = '/'}
            >
              Return Home
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>

          <div className="text-gray-600">
            <p>Need assistance?</p>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}