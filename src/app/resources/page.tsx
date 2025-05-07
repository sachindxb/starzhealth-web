'use client'

import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'Patient Forms',
      description: 'Access and download important healthcare forms',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/resources/patient-forms',
      count: 12,
    },
    {
      title: 'Insurance Information',
      description: 'Learn about accepted insurance plans and coverage',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: '/resources/insurance',
      count: 8,
    },
    {
      title: 'FAQ',
      description: 'Find answers to commonly asked questions',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/resources/faq',
      count: 25,
    },
    {
      title: 'Health Tips',
      description: 'Expert advice for maintaining good health',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/resources/health-tips',
      count: 15,
    },
  ]

  const featuredResources = [
    {
      title: 'New Patient Welcome Guide',
      type: 'PDF',
      size: '2.4 MB',
      updated: '2024-04-01',
    },
    {
      title: 'Insurance Verification Form',
      type: 'PDF',
      size: '1.1 MB',
      updated: '2024-03-15',
    },
    {
      title: 'Patient Rights & Responsibilities',
      type: 'PDF',
      size: '890 KB',
      updated: '2024-03-10',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Patient Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access important healthcare information, forms, and educational materials
          to help you manage your health journey.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {resourceCategories.map((category) => (
          <Card
            key={category.title}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => window.location.href = category.link}
          >
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Badge
                text={`${category.count} items`}
                variant="info"
                size="small"
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Featured Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResources.map((resource) => (
            <Card key={resource.title} className="hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium mb-2">{resource.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.size}</span>
                    <span>•</span>
                    <span>Updated: {resource.updated}</span>
                  </div>
                </div>
                <Button variant="outline" size="small">
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <Card>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Need Assistance?</h2>
            <p className="text-gray-600">
              Our support team is here to help you find the resources you need.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Button variant="outline" onClick={() => window.location.href = '/contact'}>
              Contact Support
            </Button>
            <Button variant="primary" onClick={() => window.location.href = '/resources/faq'}>
              View FAQ
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}