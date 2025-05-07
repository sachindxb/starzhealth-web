'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Alert from '@/components/common/Alert'
import Modal from '@/components/common/Modal'
import Loading from '@/components/common/Loading'

export default function AppointmentsPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: '',
    doctor: '',
    reason: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const appointmentTypes = [
    { id: 'consultation', name: 'General Consultation' },
    { id: 'followup', name: 'Follow-up Visit' },
    { id: 'specialist', name: 'Specialist Consultation' },
    { id: 'emergency', name: 'Urgent Care' },
  ]

  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required'
      if (!formData.lastName) newErrors.lastName = 'Last name is required'
      if (!formData.email) newErrors.email = 'Email is required'
      if (!formData.phone) newErrors.phone = 'Phone number is required'
    }

    if (currentStep === 2) {
      if (!formData.date) newErrors.date = 'Date is required'
      if (!formData.time) newErrors.time = 'Time is required'
      if (!formData.type) newErrors.type = 'Appointment type is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(step)) {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsLoading(false)
      setShowConfirmation(true)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#2980bc] mb-2">
          Book an Appointment
        </h1>
        <p className="text-gray-600">
          Schedule your visit with our healthcare professionals
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-8">
        {[1, 2, 3].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`flex items-center ${stepNumber < 3 ? 'w-1/3' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= stepNumber ? 'bg-[#2980bc] text-white' : 'bg-gray-200'
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < 3 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  step > stepNumber ? 'bg-[#2980bc]' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <Card>
        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#2980bc] mb-4">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  required
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                  required
                />
              </div>
              <Input
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
              <Input
                type="tel"
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
                required
              />
            </div>
          )}

          {/* Step 2: Appointment Details */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#2980bc] mb-4">Appointment Details</h2>
              <Input
                type="date"
                label="Preferred Date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                error={errors.date}
                required
              />
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#21b6d5]"
                >
                  <option value="">Select a time</option>
                  {availableTimes.map(time => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="mt-1 text-sm text-red-500">{errors.time}</p>
                )}
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Appointment Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#21b6d5]"
                >
                  <option value="">Select type</option>
                  {appointmentTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                {errors.type && (
                  <p className="mt-1 text-sm text-red-500">{errors.type}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#2980bc] mb-4">Confirm Details</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{`${formData.firstName} ${formData.lastName}`}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">{formData.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-medium">{formData.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-medium">
                      {appointmentTypes.find(t => t.id === formData.type)?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(prev => prev - 1)}
              >
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                variant="primary"
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
              >
                {isLoading ? <Loading type="spinner" size="small" color="white" /> : 'Confirm Booking'}
              </Button>
            )}
          </div>
        </form>
      </Card>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Appointment Confirmed!"
      >
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-[#21b6d5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="mt-4 text-lg text-gray-800">
            Your appointment has been successfully scheduled!
          </p>
          <p className="mt-2 text-gray-600">
            A confirmation email has been sent to {formData.email}
          </p>
          <Button
            variant="primary"
            className="mt-6"
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </Button>
        </div>
      </Modal>
    </div>
  )
}
