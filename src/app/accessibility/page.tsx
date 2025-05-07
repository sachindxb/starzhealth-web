'use client'

import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'

export default function AccessibilityPage() {
  const commitments = [
    {
      title: 'Web Content Accessibility',
      description: 'Our website follows WCAG 2.1 Level AA standards',
      features: [
        'Screen reader compatibility',
        'Keyboard navigation support',
        'Color contrast compliance',
        'Text resizing options',
        'Alternative text for images',
      ],
    },
    {
      title: 'Facility Accessibility',
      description: 'Our facilities are designed for universal access',
      features: [
        'Wheelchair accessible entrances',
        'Accessible parking spaces',
        'Elevator access to all floors',
        'ADA-compliant restrooms',
        'Clear pathways and signage',
      ],
    },
    {
      title: 'Communication Support',
      description: 'We provide various communication aids',
      features: [
        'Sign language interpretation',
        'Language translation services',
        'TTY/TDD devices',
        'Large print materials',
        'Audio description services',
      ],
    },
  ]

  const guidelines = [
    {
      id: 'perceivable',
      title: 'Perceivable',
      items: [
        'Text alternatives for non-text content',
        'Captions for multimedia',
        'Content adaptable and distinguishable',
        'Color not used as sole means of conveying information',
      ],
    },
    {
      id: 'operable',
      title: 'Operable',
      items: [
        'Full keyboard accessibility',
        'Sufficient time to read content',
        'No content that could cause seizures',
        'Easy navigation and location finding',
      ],
    },
    {
      id: 'understandable',
      title: 'Understandable',
      items: [
        'Readable and understandable text',
        'Content appears and operates in predictable ways',
        'Input assistance and error prevention',
        'Clear instructions for all functionality',
      ],
    },
    {
      id: 'robust',
      title: 'Robust',
      items: [
        'Compatible with current and future tools',
        'Clean and valid HTML/CSS code',
        'Proper ARIA implementation',
        'Regular accessibility testing',
      ],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2980bc] mb-4">
          Accessibility Statement
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          StarzHealth is committed to ensuring digital and physical accessibility 
          for people with disabilities.
        </p>
      </div>

      {/* Our Commitments */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {commitments.map((commitment, index) => (
          <Card key={index} className="h-full">
            <h2 className="text-xl font-semibold text-[#2980bc] mb-3">{commitment.title}</h2>
            <p className="text-gray-600 mb-4">{commitment.description}</p>
            <ul className="space-y-2">
              {commitment.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#21b6d5] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* WCAG Guidelines */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#2980bc] mb-6">
          Web Content Accessibility Guidelines (WCAG) 2.1
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {guidelines.map((guideline) => (
            <Card key={guideline.id}>
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#2980bc] mb-3">{guideline.title}</h3>
                  <ul className="space-y-2">
                    {guideline.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#21b6d5] mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Accessibility Tools */}
      <Card className="mb-12">
        <h2 className="text-xl font-semibold text-[#2980bc] mb-4">Accessibility Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2 text-[#2980bc]">Text Size</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="small">A-</Button>
              <Button variant="outline" size="small">A</Button>
              <Button variant="outline" size="small">A+</Button>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-[#2980bc]">Contrast</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="small">Normal</Button>
              <Button variant="outline" size="small">High</Button>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-[#2980bc]">Navigation</h3>
            <Button variant="outline" size="small">Skip to Main Content</Button>
          </div>
        </div>
      </Card>

      {/* Contact Section */}
      <Card className="bg-[#e6f7ff]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#2980bc] mb-2">
            Need Accessibility Assistance?
          </h2>
          <p className="text-gray-600 mb-4">
            If you experience any accessibility issues, please contact our accessibility team.
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
              onClick={() => window.location.href = 'mailto:accessibility@starzhealth.com'}
            >
              Email Accessibility Team
            </Button>
          </div>
        </div>
      </Card>

      {/* Feedback Section */}
      <Card className="mt-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#2980bc] mb-2">
            Help Us Improve
          </h2>
          <p className="text-gray-600 mb-4">
            We welcome your feedback on the accessibility of StarzHealth website and facilities.
          </p>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/contact?type=accessibility'}
          >
            Provide Feedback
          </Button>
        </div>
      </Card>
    </div>
  )
}
