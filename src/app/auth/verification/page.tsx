'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function VerificationPage() {
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleResendVerification = async () => {
    setIsSending(true)
    setSent(false)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSending(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-12 bg-gray-50">
      <Card className="max-w-md w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#2980bc]">
            Verify Your Email
          </h1>
          <p className="text-gray-600 mb-6">
            Please check your email for verification instructions.
          </p>

          {sent && (
            <p className="text-green-600 text-sm mb-4">
              Verification email sent successfully!
            </p>
          )}

          <Button
            variant="primary"
            className="w-full"
            onClick={handleResendVerification}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Resend Verification'}
          </Button>
        </div>
      </Card>
    </div>
  )
}
