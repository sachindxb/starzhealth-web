'use client'

import { useEffect, useState } from 'react'
import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'

interface Invoice {
  id: number
  doctor: string
  date: string
  amount: number
  status: 'Paid' | 'Unpaid' | 'Pending'
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('date-desc')
  const [currentPage, setCurrentPage] = useState(1)
  const invoicesPerPage = 5

  useEffect(() => {
    // TODO: Replace this mock fetch with real API call later
    const fetchInvoices = async () => {
      const mockInvoices: Invoice[] = Array.from({ length: 18 }, (_, i) => ({
        id: i + 1,
        doctor: `Doctor ${i + 1}`,
        date: `2024-04-${String((i % 28) + 1).padStart(2, '0')}`,
        amount: Math.round(Math.random() * 500 + 50),
        status: ['Paid', 'Unpaid', 'Pending'][i % 3] as Invoice['status'],
      }))
      setInvoices(mockInvoices)
    }
    fetchInvoices()
  }, [])

  const filteredInvoices = invoices.filter(inv =>
    inv.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.date.includes(searchQuery) ||
    inv.amount.toString().includes(searchQuery)
  )

  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    if (sortBy === 'date-asc') return a.date.localeCompare(b.date)
    if (sortBy === 'amount-asc') return a.amount - b.amount
    if (sortBy === 'amount-desc') return b.amount - a.amount
    return b.date.localeCompare(a.date) // Default: date-desc
  })

  const indexOfLastInvoice = currentPage * invoicesPerPage
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage
  const currentInvoices = sortedInvoices.slice(indexOfFirstInvoice, indexOfLastInvoice)

  const totalPages = Math.ceil(sortedInvoices.length / invoicesPerPage)

  const handleExportCSV = () => {
    const headers = 'ID,Doctor,Date,Amount,Status\n'
    const rows = currentInvoices.map(inv => `${inv.id},${inv.doctor},${inv.date},${inv.amount},${inv.status}`).join('\n')
    const csvContent = headers + rows
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.setAttribute('download', 'invoices.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Invoices</h1>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by doctor, date, amount..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2 focus:ring-2 focus:ring-[#2980bc]"
          value={searchQuery}
          onChange={(e) => {
            setCurrentPage(1)
            setSearchQuery(e.target.value)
          }}
        />
        <div className="flex gap-4">
          <select
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#2980bc]"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="amount-desc">Amount High to Low</option>
            <option value="amount-asc">Amount Low to High</option>
          </select>
          <Button variant="outline" onClick={handleExportCSV}>Export CSV</Button>
        </div>
      </div>

      {/* Invoice List */}
      {currentInvoices.length > 0 ? (
        currentInvoices.map(inv => (
          <Card key={inv.id} className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{inv.doctor}</h3>
                <p className="text-gray-600">{inv.date}</p>
                <p className="font-medium">${inv.amount.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge text={inv.status} variant={inv.status === 'Paid' ? 'success' : inv.status === 'Unpaid' ? 'error' : 'warning'} />
                <Button variant="secondary" size="small">View Invoice</Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div className="text-center text-gray-500 mt-20">No invoices found</div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full text-sm ${
                currentPage === i + 1 ? 'bg-[#2980bc] text-white' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

//Future use
/* const response = await fetch('/api/invoices');
const data: Invoice[] = await response.json();
setInvoices(data);
*/


// 📦 Future API Integration (production mode):

// 1. Create your real invoices API endpoint (example: /api/invoices).
// 2. Uncomment this inside useEffect (currently commented).

/*
import { useEffect, useState } from 'react';

// At top:
const [invoices, setInvoices] = useState<Invoice[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchInvoices = async () => {
    try {
      const response = await fetch('/api/invoices');
      if (!response.ok) {
        throw new Error('Failed to fetch invoices');
      }
      const data: Invoice[] = await response.json();
      setInvoices(data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
      // You can also set an error state to show user-friendly error messages.
    } finally {
      setLoading(false);
    }
  };

  fetchInvoices();
}, []);
*/

// 3. Remove the dummy invoices array that was hardcoded for testing.
// 4. All features like pagination, search, sort, export will continue working automatically!
// (because the display logic already works dynamically based on the invoices array).

// 🚀 Done! Production ready.
