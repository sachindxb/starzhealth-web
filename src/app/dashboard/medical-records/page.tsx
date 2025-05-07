'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'
import Modal from '@/components/common/Modal'
import Pagination from '@/components/common/pagination' // Assume you have this
import { MedicalRecord } from '@/types/dashboard' // Assume you have this

export default function MedicalRecordsPage() {
  const [records, setRecords] = useState<MedicalRecord[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(null)
  const [activeTab, setActiveTab] = useState('all')

  const recordsPerPage = 5

  useEffect(() => {
    // Simulated Dummy Data (for now)
    const dummyRecords: MedicalRecord[] = [
      // --- Dummy data for testing ---
      {
        id: 1,
        type: 'Lab Result',
        date: '2024-04-15',
        doctor: 'Dr. Sarah Johnson',
        department: 'Cardiology',
        status: 'normal',
        description: 'Annual blood work results',
        details: {
          tests: [
            { name: 'Complete Blood Count', result: 'Normal', range: '4.5-5.5' },
            { name: 'Cholesterol', result: 'Borderline', range: '150-200' }
          ],
          notes: 'Minor cholesterol elevation.'
        }
      },
      {
        id: 2,
        type: 'Imaging',
        date: '2024-03-20',
        doctor: 'Dr. Michael Chen',
        department: 'Radiology',
        status: 'completed',
        description: 'Chest X-Ray',
        details: {
          findings: 'No abnormalities detected',
          recommendation: 'No follow-up needed'
        }
      },
      {
        id: 3,
        type: 'Procedure',
        date: '2024-02-15',
        doctor: 'Dr. Alex White',
        department: 'Orthopedics',
        status: 'pending',
        description: 'Knee Surgery Evaluation',
        details: {
          findings: 'Pending surgical evaluation',
          recommendation: 'Pending'
        }
      },
      // Add more dummy data if needed
    ]

    setRecords(dummyRecords)

    // --- Real API Example for later production use ---
    /*
    async function fetchRecords() {
      try {
        const response = await fetch('/api/medical-records')
        const data: MedicalRecord[] = await response.json()
        setRecords(data)
      } catch (error) {
        console.error('Failed to load records', error)
      }
    }
    fetchRecords()
    */
  }, [])

  const recordTypes = ['all', 'Lab Result', 'Imaging', 'Procedure']

  const filteredRecords = activeTab === 'all'
    ? records
    : records.filter(record => record.type === activeTab)

  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  )

  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage)

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: { text: string, variant: any } } = {
      normal: { text: 'Normal', variant: 'success' },
      abnormal: { text: 'Abnormal', variant: 'error' },
      pending: { text: 'Pending', variant: 'warning' },
      completed: { text: 'Completed', variant: 'info' }
    }
    return variants[status] || { text: status, variant: 'primary' }
  }

  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
{/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
        <Button variant="primary">Download All Records</Button>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {recordTypes.map(type => (
            <button
              key={type}
              onClick={() => {
                setActiveTab(type)
                setCurrentPage(1)
              }}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === type
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </nav>
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {paginatedRecords.map(record => (
          <Card key={record.id} className="hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-medium text-gray-900">{record.description}</h3>
                  <Badge {...getStatusBadge(record.status)} />
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {record.date} • {record.doctor} • {record.department}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => setSelectedRecord(record)}
                >
                  View Details
                </Button>
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => alert('Download started!')}
                >
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredRecords.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No records found.
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

      {/* Modal for Record Details */}
      <Modal
        isOpen={!!selectedRecord}
        onClose={() => setSelectedRecord(null)}
        title={selectedRecord?.description}
      >
        {selectedRecord && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{selectedRecord.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Doctor</p>
                <p className="font-medium">{selectedRecord.doctor}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium">{selectedRecord.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{selectedRecord.type}</p>
              </div>
            </div>
            {/* Detailed Info */}
            <div className="border-t pt-4">
              {selectedRecord.type === 'Lab Result' && (
                <div>
                  <h4 className="font-semibold mb-2">Test Results</h4>
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr>
                        <th>Test</th>
                        <th>Result</th>
                        <th>Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedRecord.details.tests.map((test: any, i: number) => (
                        <tr key={i}>
                          <td>{test.name}</td>
                          <td>{test.result}</td>
                          <td>{test.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {selectedRecord.type === 'Imaging' && (
                <div>
                  <h4 className="font-semibold mb-2">Findings</h4>
                  <p className="text-gray-600">{selectedRecord.details.findings}</p>
                  <h4 className="font-semibold mt-4 mb-2">Recommendation</h4>
                  <p className="text-gray-600">{selectedRecord.details.recommendation}</p>
                </div>
              )}
            </div>

            <Button
              variant="outline"
              className="w-full mt-6"
              onClick={() => setSelectedRecord(null)}
            >
              Close
            </Button>
          </div>
        )}
      </Modal>
    </div>
  )
}