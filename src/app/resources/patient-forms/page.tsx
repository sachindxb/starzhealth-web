'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'
import Input from '@/components/common/Input'
import Alert from '@/components/common/Alert'

export default function PatientFormsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [alertMessage, setAlertMessage] = useState('')

  const categories = [
    { id: 'all', name: 'All Forms' },
    { id: 'new-patient', name: 'New Patient' },
    { id: 'registration', name: 'Registration' },
    { id: 'medical', name: 'Medical History' },
    { id: 'consent', name: 'Consent Forms' },
    { id: 'insurance', name: 'Insurance' },
  ]

  const forms = [
    {
      id: 1,
      title: 'New Patient Registration Form',
      category: 'new-patient',
      format: 'PDF',
      size: '245 KB',
      lastUpdated: '2024-04-01',
      required: true,
      description: 'Required for all new patients. Please complete prior to your first visit.',
      language: ['English', 'Spanish'],
    },
    {
      id: 2,
      title: 'Medical History Questionnaire',
      category: 'medical',
      format: 'PDF',
      size: '180 KB',
      lastUpdated: '2024-03-15',
      required: true,
      description: 'Detailed medical history form including medications and allergies.',
      language: ['English'],
    },
    {
      id: 3,
      title: 'Insurance Information Form',
      category: 'insurance',
      format: 'PDF',
      size: '150 KB',
      lastUpdated: '2024-03-10',
      required: true,
      description: 'Insurance policy and coverage details form.',
      language: ['English', 'Spanish'],
    },
    {
      id: 4,
      title: 'HIPAA Consent Form',
      category: 'consent',
      format: 'PDF',
      size: '120 KB',
      lastUpdated: '2024-02-28',
      required: true,
      description: 'Privacy practices acknowledgment and consent form.',
      language: ['English', 'Spanish', 'Chinese'],
    },
    // Add more forms as needed
  ]

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || form.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const handleDownload = (formId: number) => {
    // Implement actual download logic here
    setAlertMessage('Form download started.')
    setTimeout(() => setAlertMessage(''), 3000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Patient Forms
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access and download important healthcare forms and documents
        </p>
      </div>

      {alertMessage && (
        <Alert
          type="success"
          message={alertMessage}
          onClose={() => setAlertMessage('')}
          className="mb-6"
        />
      )}

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <Input
          type="text"
          placeholder="Search forms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xl mx-auto"
        />

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

      {/* Forms List */}
      <div className="space-y-4">
        {filteredForms.map((form) => (
          <Card key={form.id} className="hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {form.title}
                  </h3>
                  {form.required && (
                    <Badge text="Required" variant="error" size="small" />
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  {form.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {form.format} • {form.size}
                  </span>
                  <span>Updated: {form.lastUpdated}</span>
                  <div className="flex items-center space-x-2">
                    <span>Available in:</span>
                    {form.language.map((lang) => (
                      <Badge
                        key={lang}
                        text={lang}
                        variant="info"
                        size="small"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-2">
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => window.open(`#preview-${form.id}`, '_blank')}
                >
                  Preview
                </Button>
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => handleDownload(form.id)}
                >
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredForms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No forms found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Instructions Section */}
      <Card className="mt-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Form Submission Instructions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Option 1: Online Portal</h3>
              <p className="text-gray-600 text-sm">
                Log in to your patient portal to fill and submit forms electronically.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => window.location.href = '/dashboard'}
              >
                Access Portal
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-2">Option 2: Email</h3>
              <p className="text-gray-600 text-sm">
                Send completed forms to forms@starzhealth.com
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => window.location.href = 'mailto:forms@starzhealth.com'}
              >
                Send Email
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-2">Option 3: In Person</h3>
              <p className="text-gray-600 text-sm">
                Bring completed forms to your appointment.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => window.location.href = '/contact'}
              >
                Our Location
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Need Help Section */}
      <Card className="mt-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Need Assistance?</h2>
          <p className="text-gray-600 mb-4">
            Having trouble with the forms? Our team is here to help.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Support
            </Button>
            <Button
              variant="primary"
              onClick={() => window.location.href = '/resources/faq'}
            >
              View FAQ
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}