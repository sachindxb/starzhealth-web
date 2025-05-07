'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'
import Modal from '@/components/common/Modal'
import Alert from '@/components/common/Alert'

// Pagination component
function Pagination({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) {
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center mt-6 space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === index + 1
              ? 'bg-[#2980bc] text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

// Type
interface Bill {
  id: number
  date: string
  type: string
  amount: number
  status: 'pending' | 'paid'
  dueDate?: string
  paidDate?: string
  provider: string
  department: string
  insurance: {
    provider: string
    policyNumber: string
    coverage: string
    copay: number
  }
  items: { description: string; amount: number }[]
}

export default function BillingPage() {
  const [bills, setBills] = useState<Bill[]>([])
  const [filteredBills, setFilteredBills] = useState<Bill[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState<'pending' | 'paid' | 'all'>('pending')
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const billsPerPage = 5

  useEffect(() => {
    const dummyBills: Bill[] = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      date: `2024-04-${(i % 30) + 1}`,
      type: i % 2 === 0 ? 'Consultation' : 'Lab Test',
      amount: Math.floor(Math.random() * 300) + 50,
      status: i % 3 === 0 ? 'paid' : 'pending',
      dueDate: `2024-05-${(i % 30) + 10}`,
      paidDate: i % 3 === 0 ? `2024-04-${(i % 30) + 5}` : undefined,
      provider: i % 2 === 0 ? 'Dr. Sarah Johnson' : 'StarzHealth Labs',
      department: i % 2 === 0 ? 'Cardiology' : 'Pathology',
      insurance: {
        provider: 'HealthPlus Insurance',
        policyNumber: `HP${100000 + i}`,
        coverage: '80%',
        copay: 50,
      },
      items: [{ description: 'Service Charge', amount: Math.floor(Math.random() * 200) + 50 }],
    }))

    setBills(dummyBills)
    setFilteredBills(dummyBills)

    // Future real API fetch - replace dummy
    /*
    async function fetchBills() {
      const response = await fetch('/api/billing')
      const data: Bill[] = await response.json()
      setBills(data)
      setFilteredBills(data)
    }
    fetchBills()
    */
  }, [])

  useEffect(() => {
    const filter = bills.filter(b => activeTab === 'all' || b.status === activeTab)
    setFilteredBills(filter)
    setCurrentPage(1)
  }, [activeTab, bills])

  const paginatedBills = filteredBills.slice((currentPage - 1) * billsPerPage, currentPage * billsPerPage)
  const totalPages = Math.ceil(filteredBills.length / billsPerPage)

  const handlePayment = async (bill: Bill) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setAlertMessage('Payment processed successfully!')
      setShowPaymentModal(false)
    } catch {
      setAlertMessage('Payment failed. Try again.')
    }
  }

  const totalPending = bills.filter(b => b.status === 'pending').reduce((sum, b) => sum + b.amount, 0)

  return (
    <div className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Billing & Payments</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-blue-50">
          <div className="flex items-center">
            <div className="bg-[#2980bc] text-white p-3 rounded-full">$</div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pending Balance</p>
              <p className="text-2xl font-bold">${totalPending.toFixed(2)}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-green-50">
          <div className="flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-full">✓</div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Insurance Status</p>
              <p className="text-lg font-semibold">Active</p>
            </div>
          </div>
        </Card>

        <Card>
          <Button variant="primary" className="w-full" onClick={() => alert('Update payment method')}>Update Payment Method</Button>
        </Card>
      </div>

      {/* Alerts */}
      {alertMessage && (
        <Alert type="success" message={alertMessage} onClose={() => setAlertMessage('')} />
      )}

      {/* Tabs */}
      <div className="flex mb-8 space-x-6 border-b">
        {['pending', 'paid', 'all'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'pending' | 'paid' | 'all')}
            className={`pb-2 border-b-2 font-medium ${activeTab === tab ? 'border-[#2980bc] text-[#2980bc]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Bills */}
      <div className="space-y-4">
        {paginatedBills.map(bill => (
          <Card key={bill.id} className="hover:shadow-md">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">{bill.type}</h3>
                <p className="text-gray-600">{bill.date}</p>
                <p className="text-gray-800 font-medium">${bill.amount.toFixed(2)}</p>
              </div>
              <div className="flex flex-col justify-end gap-2">
                <Badge
                  text={bill.status === 'pending' ? 'Pending' : 'Paid'}
                  variant={bill.status === 'pending' ? 'warning' : 'success'}
                />
                <Button variant="outline" size="small" onClick={() => setSelectedBill(bill)}>View Details</Button>
                {bill.status === 'pending' && (
                  <Button variant="primary" size="small" onClick={() => {
                    setSelectedBill(bill)
                    setShowPaymentModal(true)
                  }}>Pay Now</Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Modal - View Bill Details */}
      <Modal isOpen={!!selectedBill && !showPaymentModal} onClose={() => setSelectedBill(null)} title="Bill Details">
        {selectedBill && (
          <div>
            {selectedBill.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.description}</span>
                <span>${item.amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>

      {/* Modal - Make Payment */}
      <Modal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} title="Make Payment">
        {selectedBill && (
          <div className="space-y-4">
            <p className="text-center text-lg">Confirm payment of <strong>${selectedBill.amount.toFixed(2)}</strong></p>
            <Button variant="primary" className="w-full" onClick={() => handlePayment(selectedBill)}>Confirm</Button>
            <Button variant="outline" className="w-full" onClick={() => setShowPaymentModal(false)}>Cancel</Button>
          </div>
        )}
      </Modal>
    </div>
  )
}
