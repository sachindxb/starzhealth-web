'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'
import Modal from '@/components/common/Modal'
import Alert from '@/components/common/Alert'
import Pagination from '@/components/common/pagination'
import { Prescription } from '@/types/dashboard' // You can create this if needed

export default function PrescriptionsPage() {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null)
  const [showRefillModal, setShowRefillModal] = useState(false)
  const [activeTab, setActiveTab] = useState('active')
  const [alertMessage, setAlertMessage] = useState('')

  const prescriptionsPerPage = 5

  useEffect(() => {
    // --- Dummy Data for now ---
    const dummyPrescriptions: Prescription[] = [
      {
        id: 1,
        medication: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Twice daily',
        startDate: '2024-04-01',
        endDate: '2024-04-14',
        status: 'active',
        refillsRemaining: 2,
        prescribedBy: 'Dr. Sarah Johnson',
        instructions: 'Take with food',
        pharmacy: {
          name: 'HealthCare Pharmacy',
          address: '123 Medical Ave',
          phone: '(555) 123-4567',
        },
        sideEffects: ['Nausea', 'Diarrhea', 'Rash'],
      },
      {
        id: 2,
        medication: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily',
        startDate: '2024-03-15',
        endDate: '2024-09-15',
        status: 'active',
        refillsRemaining: 5,
        prescribedBy: 'Dr. Michael Chen',
        instructions: 'Take in the morning',
        pharmacy: {
          name: 'MedPlus Pharmacy',
          address: '456 Health St',
          phone: '(555) 987-6543',
        },
        sideEffects: ['Dizziness', 'Cough', 'Headache'],
      },
      // Add more dummy prescriptions if needed
    ]
    setPrescriptions(dummyPrescriptions)

    // --- Real API for production ---
    /*
    async function fetchPrescriptions() {
      try {
        const response = await fetch('/api/prescriptions')
        const data: Prescription[] = await response.json()
        setPrescriptions(data)
      } catch (error) {
        console.error('Failed to load prescriptions', error)
      }
    }
    fetchPrescriptions()
    */
  }, [])

  const filteredPrescriptions = prescriptions.filter(
    prescription => activeTab === 'all' || prescription.status === activeTab
  )

  const paginatedPrescriptions = filteredPrescriptions.slice(
    (currentPage - 1) * prescriptionsPerPage,
    currentPage * prescriptionsPerPage
  )

  const totalPages = Math.ceil(filteredPrescriptions.length / prescriptionsPerPage)

  const handleRefillRequest = async (prescription: Prescription) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setAlertMessage('Refill request sent successfully!')
      setShowRefillModal(false)
    } catch (error) {
      setAlertMessage('Error sending refill request. Please try again.')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Prescriptions</h1>
        <Button variant="primary" onClick={() => window.location.href = '/appointments'}>
          Schedule Consultation
        </Button>
      </div>

      {alertMessage && (
        <Alert
          type="success"
          message={alertMessage}
          onClose={() => setAlertMessage('')}
          className="mb-6"
        />
      )}

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['active', 'completed', 'all'].map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setCurrentPage(1)
              }}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Prescription List */}
      <div className="space-y-4">
        {paginatedPrescriptions.map(prescription => (
          <Card key={prescription.id} className="hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-medium text-gray-900">{prescription.medication}</h3>
                  <Badge
                    text={prescription.status === 'active' ? 'Active' : 'Completed'}
                    variant={prescription.status === 'active' ? 'success' : 'info'}
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Dosage</p>
                    <p className="font-medium">{prescription.dosage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Frequency</p>
                    <p className="font-medium">{prescription.frequency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prescribed By</p>
                    <p className="font-medium">{prescription.prescribedBy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Refills Remaining</p>
                    <p className="font-medium">{prescription.refillsRemaining}</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => setSelectedPrescription(prescription)}
                >
                  View Details
                </Button>
                {prescription.status === 'active' && prescription.refillsRemaining > 0 && (
                  <Button
                    variant="primary"
                    size="small"
                    onClick={() => {
                      setSelectedPrescription(prescription)
                      setShowRefillModal(true)
                    }}
                  >
                    Request Refill
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}

        {filteredPrescriptions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No prescriptions found.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={page => setCurrentPage(page)}
        />
      )}

      {/* Prescription Details Modal */}
      <Modal
        isOpen={!!selectedPrescription && !showRefillModal}
        onClose={() => setSelectedPrescription(null)}
        title="Prescription Details"
      >
        {selectedPrescription && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">{selectedPrescription.medication}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="font-medium">{selectedPrescription.startDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">End Date</p>
                <p className="font-medium">{selectedPrescription.endDate}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Instructions</h4>
              <p className="text-gray-600">{selectedPrescription.instructions}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Pharmacy Information</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{selectedPrescription.pharmacy.name}</p>
                <p className="text-gray-600">{selectedPrescription.pharmacy.address}</p>
                <p className="text-gray-600">{selectedPrescription.pharmacy.phone}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Possible Side Effects</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPrescription.sideEffects.map(effect => (
                  <Badge key={effect} text={effect} variant="warning" size="small" />
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Refill Request Modal */}
      <Modal
        isOpen={showRefillModal}
        onClose={() => setShowRefillModal(false)}
        title="Request Refill"
      >
        {selectedPrescription && (
          <div className="space-y-4">
            <p className="text-gray-600">Are you sure you want to request a refill for:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">{selectedPrescription.medication}</p>
              <p className="text-gray-600">{selectedPrescription.dosage}</p>
              <p className="text-gray-600">Refills remaining: {selectedPrescription.refillsRemaining}</p>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setShowRefillModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => handleRefillRequest(selectedPrescription)}>
                Confirm Refill Request
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
