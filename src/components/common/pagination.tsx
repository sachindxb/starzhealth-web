'use client'

import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center mt-8 space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md text-sm font-medium border ${currentPage === 1 ? 'text-gray-400 border-gray-300' : 'text-blue-600 border-blue-300 hover:bg-blue-50'}`}
      >
        Previous
      </button>
      <span className="px-4 py-2 text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md text-sm font-medium border ${currentPage === totalPages ? 'text-gray-400 border-gray-300' : 'text-blue-600 border-blue-300 hover:bg-blue-50'}`}
      >
        Next
      </button>
    </div>
  )
}
