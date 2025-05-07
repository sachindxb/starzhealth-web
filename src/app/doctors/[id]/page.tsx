'use client'

import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Dr. John Doe</h1>
            <Badge text="Cardiologist" variant="primary" className="mb-4" />
            <p className="text-gray-600 mb-6">
              Experienced healthcare professional specializing in cardiac care.
            </p>
            <Button variant="primary">Book Appointment</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}