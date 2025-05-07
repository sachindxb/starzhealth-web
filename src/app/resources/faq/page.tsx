'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'
import Input from '@/components/common/Input'

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'appointments', name: 'Appointments' },
    { id: 'insurance', name: 'Insurance & Billing' },
    { id: 'services', name: 'Services' },
    { id: 'covid', name: 'COVID-19' },
  ]

  const faqs = [
    {
      id: 1,
      question: 'How do I schedule an appointment?',
      answer: 'You can schedule an appointment through our online portal, by calling our office, or using the mobile app. For new patients, we recommend calling directly to ensure we have all necessary information.',
      category: 'appointments',
      helpful: 156,
    },
    {
      id: 2,
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, and Medicare. Please contact our billing department for specific coverage questions.',
      category: 'insurance',
      helpful: 234,
    },
    {
      id: 3,
      question: 'What COVID-19 safety measures are in place?',
      answer: 'We follow all CDC guidelines including mandatory masks, social distancing, enhanced cleaning procedures, and temperature checks. We also offer telehealth appointments when appropriate.',
      category: 'covid',
      helpful: 312,
    },
    // Add more FAQs as needed
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our services and policies
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-2xl mx-auto"
        />
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => (
          <Card
            key={faq.id}
            className={`
              transition-all duration-200
              ${expandedId === faq.id ? 'ring-2 ring-blue-500' : 'hover:shadow-md'}
            `}
          >
            <button
              className="w-full text-left"
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  {expandedId === faq.id && (
                    <div className="mt-4">
                      <p className="text-gray-600">{faq.answer}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge
                            text={faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                            variant="info"
                            size="small"
                          />
                          <span className="text-sm text-gray-500">
                            {faq.helpful} people found this helpful
                          </span>
                        </div>
                        <button
                          className="text-sm text-blue-600 hover:text-blue-800"
                          onClick={(e) => {
                            e.stopPropagation()
                            // Add helpful count logic here
                          }}
                        >
                          Mark as helpful
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
          </Card>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No questions found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="mt-12">
        <Card>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Please contact our support team.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Support
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}