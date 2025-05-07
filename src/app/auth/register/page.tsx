'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Alert from '@/components/common/Alert'
import Loading from '@/components/common/Loading'

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    insuranceProvider: '',
    policyNumber: '',
    primaryDoctor: '',
    emergencyContact: '',
    emergencyPhone: '',
    acceptTerms: false,
    acceptPrivacy: false,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateStep = (currentStep: number) => {
    setError('')
    switch (currentStep) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
          setError('Please fill in all required fields')
          return false
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match')
          return false
        }
        if (formData.password.length < 8) {
          setError('Password must be at least 8 characters long')
          return false
        }
        break
      case 2:
        if (!formData.address || !formData.city || !formData.state || !formData.zipCode) {
          setError('Please fill in all required fields')
          return false
        }
        break
      case 3:
        if (!formData.emergencyContact || !formData.emergencyPhone) {
          setError('Please provide emergency contact information')
          return false
        }
        break
    }
    return true
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(step)) return

    if (!formData.acceptTerms || !formData.acceptPrivacy) {
      setError('Please accept the terms and privacy policy')
      return
    }

    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      window.location.href = '/auth/verification'
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-12 bg-gray-50">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2980bc]">
            Create Your Account
          </h1>
          <p className="mt-2 text-gray-600">
            Join StarzHealth to manage your healthcare journey
          </p>
        </div>

        <Card>
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              {['Personal Info', 'Contact Details', 'Medical Info', 'Review'].map((label, index) => (
                <div
                  key={index}
                  className={`flex-1 text-center ${index + 1 === step ? 'text-[#2980bc]' : 'text-gray-400'}`}
                >
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 ${
                      index + 1 === step
                        ? 'border-[#2980bc] bg-[#21b6d5]/10'
                        : index + 1 < step
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200'
                    }`}
                  >
                    {index + 1 < step ? (
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                  <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </div>
                <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                <Input label="Password" type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                <Input label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
                <Input label="Date of Birth" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
              </div>
            )}

            {/* Step 2: Contact Information */}
            {step === 2 && (
              <div className="space-y-4">
                <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                <Input label="Street Address" name="address" value={formData.address} onChange={handleInputChange} required />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="City" name="city" value={formData.city} onChange={handleInputChange} required />
                  <Input label="State" name="state" value={formData.state} onChange={handleInputChange} required />
                </div>
                <Input label="ZIP Code" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
              </div>
            )}

            {/* Step 3: Medical Information */}
            {step === 3 && (
              <div className="space-y-4">
                <Input label="Insurance Provider" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleInputChange} />
                <Input label="Policy Number" name="policyNumber" value={formData.policyNumber} onChange={handleInputChange} />
                <Input label="Primary Doctor" name="primaryDoctor" value={formData.primaryDoctor} onChange={handleInputChange} />
                <Input label="Emergency Contact Name" name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} required />
                <Input label="Emergency Contact Phone" type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} required />
              </div>
            )}

            {/* Step 4: Review and Agreement */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><p className="text-gray-500">Name</p><p>{formData.firstName} {formData.lastName}</p></div>
                    <div><p className="text-gray-500">Email</p><p>{formData.email}</p></div>
                    <div><p className="text-gray-500">Phone</p><p>{formData.phone}</p></div>
                    <div><p className="text-gray-500">Date of Birth</p><p>{formData.dateOfBirth}</p></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="accept-terms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#2980bc] focus:ring-[#21b6d5] border-gray-300 rounded"
                    />
                    <label htmlFor="accept-terms" className="ml-2 text-sm text-gray-600">
                      I agree to the <a href="/terms" className="text-[#2980bc] hover:text-[#21b6d5]">Terms of Service</a>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="accept-privacy"
                      name="acceptPrivacy"
                      type="checkbox"
                      checked={formData.acceptPrivacy}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#2980bc] focus:ring-[#21b6d5] border-gray-300 rounded"
                    />
                    <label htmlFor="accept-privacy" className="ml-2 text-sm text-gray-600">
                      I agree to the <a href="/privacy" className="text-[#2980bc] hover:text-[#21b6d5]">Privacy Policy</a>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between space-x-4">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              {step < 4 ? (
                <Button type="button" variant="primary" className="ml-auto" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button type="submit" variant="primary" className="ml-auto" disabled={isLoading}>
                  {isLoading ? (
                    <Loading type="spinner" size="small" color="white" />
                  ) : (
                    'Create Account'
                  )}
                </Button>
              )}
            </div>
          </form>
        </Card>

        {/* Sign In Link */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Already have an account?</span>{' '}
          <a href="/auth/login" className="font-medium text-[#2980bc] hover:text-[#21b6d5]">
            Sign in
          </a>
        </div>
      </div>
    </div>
  )
}
