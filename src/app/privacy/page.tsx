'use client'

import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `This Privacy Policy describes how StarzHealth ("we," "our," or "us") collects, uses, and shares your personal information when you use our services. We are committed to protecting your privacy and ensuring the security of your personal health information in compliance with HIPAA regulations.`,
    },
    {
      id: 'information-collected',
      title: 'Information We Collect',
      subsections: [
        {
          title: 'Personal Information',
          content: [
            'Name, date of birth, and contact information',
            'Medical history and health records',
            'Insurance information and payment details',
            'Emergency contact information',
            'Communications with our healthcare providers',
          ],
        },
        {
          title: 'Technical Information',
          content: [
            'Device and browser information',
            'IP address and location data',
            'Usage data and analytics',
            'Cookies and similar technologies',
          ],
        },
      ],
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      content: [
        'Provide healthcare services and treatment',
        'Process appointments and payments',
        'Communicate about your care and services',
        'Improve our services and patient experience',
        'Comply with legal and regulatory requirements',
        'Conduct research and analytics (with anonymized data)',
      ],
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      content: `We may share your information with:
        • Healthcare providers involved in your care
        • Insurance companies for billing purposes
        • Third-party service providers who assist in our operations
        • Legal authorities when required by law
        
        We never sell your personal information to third parties.`,
    },
    {
      id: 'security',
      title: 'Security Measures',
      content: `We implement appropriate technical and organizational measures to protect your personal information, including:
        • Encryption of sensitive data
        • Secure access controls
        • Regular security assessments
        • Staff training on privacy and security
        • Physical security measures`,
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: [
        'Access your health records',
        'Request corrections to your information',
        'Receive a copy of your records',
        'Request restrictions on information sharing',
        'Receive notifications of privacy breaches',
        'File a complaint about privacy practices',
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Last updated: April 15, 2024
        </p>
      </div>

      {/* Quick Links */}
      <Card className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Contents</h2>
        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </Card>

      {/* Main Content */}
      <div className="space-y-8">
        {sections.map((section) => (
          <Card key={section.id} id={section.id}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {section.title}
            </h2>
            
            {section.subsections ? (
              <div className="space-y-6">
                {section.subsections.map((subsection, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {subsection.title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {subsection.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : Array.isArray(section.content) ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {section.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 whitespace-pre-line">
                {section.content}
              </p>
            )}
          </Card>
        ))}
      </div>

      {/* Contact Section */}
      <Card className="mt-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-gray-600 mb-4">
            Contact our Privacy Officer for more information about our privacy practices.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
            <Button
              variant="primary"
              onClick={() => window.location.href = 'mailto:privacy@starzhealth.com'}
            >
              Email Privacy Officer
            </Button>
          </div>
        </div>
      </Card>

      {/* Print Button */}
      <div className="mt-8 text-center">
        <Button
          variant="outline"
          onClick={() => window.print()}
          className="print:hidden"
        >
          Print Privacy Policy
        </Button>
      </div>
    </div>
  )
}