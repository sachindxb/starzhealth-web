'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Alert from '@/components/common/Alert'
import Loading from '@/components/common/Loading'

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email) {
      setError('Please enter your email address')
      return
    }

    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSuccess('Verification code has been sent to your email')
      setStep(2)
    } catch (err) {
      setError('Failed to send verification code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.verificationCode) {
      setError('Please enter the verification code')
      return
    }

    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStep(3)
    } catch (err) {
      setError('Invalid verification code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.newPassword || !formData.confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.newPassword.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }

    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSuccess('Password has been successfully reset')
      setTimeout(() => {
        window.location.href = '/auth/login'
      }, 2000)
    } catch (err) {
      setError('Failed to reset password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-12 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2980bc]">
            Reset Your Password
          </h1>
          <p className="mt-2 text-gray-600">
            {step === 1 && "Enter your email to receive a verification code"}
            {step === 2 && "Enter the verification code sent to your email"}
            {step === 3 && "Create your new password"}
          </p>
        </div>

        <Card>
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              {['Email', 'Verify', 'Reset'].map((label, index) => (
                <div
                  key={index}
                  className={`flex-1 text-center ${
                    index + 1 === step ? 'text-[#2980bc]' : 'text-gray-400'
                  }`}
                >
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 ${
                      index + 1 === step
                        ? 'border-[#2980bc] bg-[#e6f7ff]'
                        : index + 1 < step
                        ? 'border-[#42ae59] bg-green-50'
                        : 'border-gray-200'
                    }`}
                  >
                    {index + 1 < step ? (
                      <svg className="w-4 h-4 text-[#42ae59]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="mt-2 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {error && (
            <Alert
              type="error"
              message={error}
              onClose={() => setError('')}
              className="mb-6"
            />
          )}

          {success && (
            <Alert
              type="success"
              message={success}
              onClose={() => setSuccess('')}
              className="mb-6"
            />
          )}

          {/* Step 1: Email */}
          {step === 1 && (
            <form onSubmit={handleSendCode} className="space-y-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="email"
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loading type="spinner" size="small" color="white" />
                ) : (
                  'Send Verification Code'
                )}
              </Button>
            </form>
          )}

          {/* Step 2: Verification Code */}
          {step === 2 && (
            <form onSubmit={handleVerifyCode} className="space-y-6">
              <Input
                label="Verification Code"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleInputChange}
                required
                placeholder="Enter 6-digit code"
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loading type="spinner" size="small" color="white" />
                ) : (
                  'Verify Code'
                )}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleSendCode}
                  className="text-sm text-[#2980bc] hover:text-[#21b6d5]"
                >
                  Didn't receive the code? Send again
                </button>
              </div>
            </form>
          )}

          {/* Step 3: New Password */}
          {step === 3 && (
            <form onSubmit={handleResetPassword} className="space-y-6">
              <Input
                label="New Password"
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Confirm New Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loading type="spinner" size="small" color="white" />
                ) : (
                  'Reset Password'
                )}
              </Button>
            </form>
          )}
        </Card>

        {/* Back to Login */}
        <div className="text-center text-sm">
          <a
            href="/auth/login"
            className="font-medium text-[#2980bc] hover:text-[#21b6d5]"
          >
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  )
}
