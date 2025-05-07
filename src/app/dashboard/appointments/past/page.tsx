'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'

export default function PastAppointmentsPage() {
  // Dummy example data
  const dummyAppointments = Array.from({ length: 25 }).map((_, idx) => ({
    id: idx + 1,
    doctorName: `Dr. John Doe ${idx + 1}`,
    date: `March ${idx + 1}, 2024`,
    time: '2:00 PM',
    status: idx % 2 === 0 ? 'Completed' : 'Cancelled',
  }))

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Calculate appointments for current page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentAppointments = dummyAppointments.slice(indexOfFirstItem, indexOfLastItem)

  // Calculate total pages
  const totalPages = Math.ceil(dummyAppointments.length / itemsPerPage)

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 pt-32 pb-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2980bc] mb-4">Past Appointments</h1>
        <p className="text-gray-600">
          Review your previous healthcare visits and appointment history.
        </p>
      </div>

      {/* Appointments List */}
      <div className="space-y-6">
        {currentAppointments.map((appointment) => (
          <Card key={appointment.id}>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{appointment.doctorName}</h3>
                <p className="text-gray-600">{appointment.date} at {appointment.time}</p>
                <Badge
                  text={appointment.status}
                  variant={appointment.status === 'Completed' ? 'success' : 'error'}
                  className="mt-2"
                />
              </div>
              <Button
                variant="outline"
                className="mt-4 md:mt-0"
                onClick={() => alert(`Viewing summary for ${appointment.doctorName}`)}
              >
                View Summary
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4 mt-10">
        <Button
          variant="outline"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-gray-700 text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      {/* 
        // 🔥 Later in production:
        // Replace `dummyAppointments` with real API fetched appointments.
        // Example using React Query or SWR for better loading states and caching.
      */}
    </div>
  )
}
