'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';

// Define Appointment Type
interface Appointment {
  id: number;
  doctor: string;
  date: string;
  time: string;
  type: string;
}

export default function UpcomingAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Show 5 appointments per page

  // ⚡ Future API integration: Replace with real API fetch
  useEffect(() => {
    async function fetchAppointments() {
      // Example of real API
      // const response = await fetch('/api/appointments/upcoming');
      // const data = await response.json();
      // setAppointments(data);

      // Placeholder for demo:
      setAppointments([
        { id: 1, doctor: 'Dr. Sarah Johnson', date: '2024-04-20', time: '10:00 AM', type: 'Check-up' },
        { id: 2, doctor: 'Dr. Ali Hamdan', date: '2024-05-02', time: '11:30 AM', type: 'Consultation' },
        { id: 3, doctor: 'Dr. Emily Stone', date: '2024-06-10', time: '9:00 AM', type: 'Follow-up' },
        { id: 4, doctor: 'Dr. Ahmed Saleh', date: '2024-06-22', time: '2:15 PM', type: 'Emergency' },
        { id: 5, doctor: 'Dr. Maria Gomez', date: '2024-07-05', time: '3:30 PM', type: 'Routine Check' },
        { id: 6, doctor: 'Dr. Ethan Brown', date: '2024-07-12', time: '1:00 PM', type: 'Specialist Visit' },
      ]);
    }

    fetchAppointments();
  }, []);

  const totalPages = Math.ceil(appointments.length / itemsPerPage);

  const paginatedAppointments = appointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleReschedule = (id: number) => {
    alert(`Reschedule appointment ID: ${id}`);
    // Later: Open reschedule modal
  };

  const handleCancel = (id: number) => {
    alert(`Cancel appointment ID: ${id}`);
    // Later: Call delete API
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upcoming Appointments</h1>
        <p className="text-gray-600 mt-2">Manage your upcoming visits with StarzHealth providers.</p>
      </div>

      {/* Appointments List */}
      {paginatedAppointments.length === 0 ? (
        <p className="text-gray-600 text-center">No upcoming appointments scheduled.</p>
      ) : (
        paginatedAppointments.map((apt) => (
          <Card key={apt.id} className="mb-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
              <div>
                <h3 className="font-semibold text-lg text-[#2980bc]">{apt.doctor}</h3>
                <p className="text-gray-600">{apt.date} at {apt.time}</p>
                <Badge text={apt.type} variant="primary" className="mt-2" />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => handleReschedule(apt.id)}
                >
                  Reschedule
                </Button>
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => handleCancel(apt.id)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        ))
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <Button
            variant="outline"
            size="small"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-gray-600 self-center">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="small"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
