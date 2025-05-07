'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Alert from '@/components/common/Alert'
import Loading from '@/components/common/Loading'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    gender: 'male',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    street: '123 Healthcare Ave',
    city: 'Medical City',
    state: 'MC',
    zipCode: '12345',
    emergencyName: 'Jane Doe',
    emergencyRelation: 'Spouse',
    emergencyPhone: '(555) 987-6543',
    bloodType: 'O+',
    allergies: 'None',
    medications: 'None',
    conditions: 'None',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSuccessMessage('Profile updated successfully!')
      setIsEditing(false)

      /* ✅ Future Real API Example:
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      */
    } catch (error) {
      setSuccessMessage('Error updating profile. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
{/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
        <Button
          variant={isEditing ? 'outline' : 'primary'}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel Editing' : 'Edit Profile'}
        </Button>
      </div>

      {/* Alert Message */}
      {successMessage && (
        <Alert
          type="success"
          message={successMessage}
          onClose={() => setSuccessMessage('')}
          className="mb-6"
        />
      )}

      {/* Profile Form */}
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} disabled={!isEditing} />
            <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} disabled={!isEditing} />
            <Input label="Date of Birth" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} disabled={!isEditing} />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Input label="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} disabled={!isEditing} />
            <Input label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} disabled={!isEditing} />
          </div>
        </Card>

        {/* Address */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Input label="Street Address" name="street" value={formData.street} onChange={handleInputChange} disabled={!isEditing} />
            </div>
            <Input label="City" name="city" value={formData.city} onChange={handleInputChange} disabled={!isEditing} />
            <Input label="State" name="state" value={formData.state} onChange={handleInputChange} disabled={!isEditing} />
            <Input label="ZIP Code" name="zipCode" value={formData.zipCode} onChange={handleInputChange} disabled={!isEditing} />
          </div>
        </Card>

        {/* Emergency Contact */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Name" name="emergencyName" value={formData.emergencyName} onChange={handleInputChange} disabled={!isEditing} />
            <Input label="Relationship" name="emergencyRelation" value={formData.emergencyRelation} onChange={handleInputChange} disabled={!isEditing} />
            <Input label="Phone" type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} disabled={!isEditing} />
          </div>
        </Card>

        {/* Medical Information */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <Input label="Blood Type" name="bloodType" value={formData.bloodType} onChange={handleInputChange} disabled={!isEditing} />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
              <textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Medications</label>
              <textarea
                name="medications"
                value={formData.medications}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Medical Conditions</label>
              <textarea
                name="conditions"
                value={formData.conditions}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </Card>

        {/* Save / Cancel Buttons */}
        {isEditing && (
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loading type="spinner" size="small" color="white" />
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}
