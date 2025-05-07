'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      date: '2024-04-20',
      time: '10:00 AM',
      type: 'Check-up',
    },
    // Add more appointments as needed
  ]

  const recentPrescriptions = [
    {
      id: 1,
      medication: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Twice daily',
      prescribed: '2024-04-15',
    },
    // Add more prescriptions as needed
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, John Doe</h1>
        <p className="text-gray-600 mt-2">Here's your health summary</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-blue-50">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Next Appointment</h3>
              <p className="text-blue-600 font-semibold">Apr 20, 10:00 AM</p>
            </div>
          </div>
        </Card>

        <Card className="bg-green-50">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Health Status</h3>
              <p className="text-green-600 font-semibold">All Clear</p>
            </div>
          </div>
        </Card>

        <Card className="bg-purple-50">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Prescriptions</h3>
              <p className="text-purple-600 font-semibold">2 Active</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{appointment.doctor}</p>
                    <p className="text-sm text-gray-600">
                      {appointment.date} at {appointment.time}
                    </p>
                    <Badge text={appointment.type} variant="info" className="mt-2" />
                  </div>
                  <Button variant="outline" size="small">
                    Reschedule
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="primary" className="mt-4 w-full">
              Book New Appointment
            </Button>
          </Card>

          <Card className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Recent Prescriptions</h2>
            <div className="space-y-4">
              {recentPrescriptions.map((prescription) => (
                <div
                  key={prescription.id}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{prescription.medication}</p>
                      <p className="text-sm text-gray-600">
                        {prescription.dosage} - {prescription.frequency}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Prescribed: {prescription.prescribed}
                      </p>
                    </div>
                    <Button variant="outline" size="small">
                      Refill
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div>
          <Card>
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button variant="primary" className="w-full">
                Message Doctor
              </Button>
              <Button variant="outline" className="w-full">
                View Test Results
              </Button>
              <Button variant="outline" className="w-full">
                Update Profile
              </Button>
              <Button variant="outline" className="w-full">
                View Medical Records
              </Button>
            </div>
          </Card>

          <Card className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Health Reminders</h2>
            <div className="space-y-3">
              <div className="flex items-center text-yellow-600 bg-yellow-50 p-3 rounded-lg">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Annual check-up due in 2 weeks</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 p-3 rounded-lg">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Medication refill needed</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}