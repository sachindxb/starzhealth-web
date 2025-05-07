'use client'

import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function TermsPage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: `By accessing and using StarzHealth services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.`,
    },
    {
      id: 'services',
      title: 'Healthcare Services',
      subsections: [
        {
          title: 'Service Description',
          content: `StarzHealth provides medical services, including but not limited to:
            • Primary and specialty care
            • Emergency medical services
            • Diagnostic services
            • Telehealth consultations
            • Preventive care services`,
        },
        {
          title: 'Service Limitations',
          content: `Our services are subject to:
            • Availability of medical professionals
            • Appointment scheduling requirements
            • Insurance coverage and payment terms
            • State and federal regulations
            • Medical necessity criteria`,
        },
      ],
    },
    {
      id: 'appointments',
      title: 'Appointments and Cancellations',
      content: [
        'Appointments must be scheduled in advance through our approved channels',
        '24-hour notice is required for appointment cancellations',
        'Late cancellations or no-shows may incur fees',
        'Emergency services are available 24/7 without appointment',
        'Telehealth appointments are subject to technical requirements',
      ],
    },
    {
      id: 'payment',
      title: 'Payment and Insurance',
      content: [
        'Payment is required at the time of service',
        'We accept most major insurance plans',
        'Patients are responsible for understanding their insurance coverage',
        'Co-payments and deductibles are patient responsibility',
        'Payment plans may be available for eligible patients',
      ],
    },
    {
      id: 'medical-records',
      title: 'Medical Records',
      content: `Medical records are maintained in accordance with state and federal laws. Patients have the right to:
        • Access their medical records
        • Request amendments to their records
        • Receive copies of their records
        • Authorize release of records to third parties
        
        Fees may apply for record copies in accordance with state regulations.`,
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: `To the fullest extent permitted by law, StarzHealth shall not be liable for:
        • Direct, indirect, or consequential damages
        • Loss or damage arising from use of our services
        • Technical failures or service interruptions
        • Third-party actions or services
        
        Medical emergencies should be directed to 911 or the nearest emergency room.`,
    },
    {
      id: 'privacy',
      title: 'Privacy and Confidentiality',
      content: `We maintain patient privacy in accordance with HIPAA regulations. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal health information.`,
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      content: `StarzHealth reserves the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.`,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600">
          Last updated: April 15, 2024
        </p>
      </div>

      {/* Quick Navigation */}
      <Card className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            >
              {section.title}
            </a>
          ))}
        </div>
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
                    <div className="text-gray-600 whitespace-pre-line">
                      {subsection.content}
                    </div>
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
              <div className="text-gray-600 whitespace-pre-line">
                {section.content}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Agreement Section */}
      <Card className="mt-8 bg-blue-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Questions About Our Terms?
          </h2>
          <p className="text-gray-600 mb-4">
            Contact our legal department for clarification of any terms or conditions.
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
              onClick={() => window.location.href = 'mailto:legal@starzhealth.com'}
            >
              Email Legal Department
            </Button>
          </div>
        </div>
      </Card>

      {/* Print Option */}
      <div className="mt-8 text-center">
        <Button
          variant="outline"
          onClick={() => window.print()}
          className="print:hidden"
        >
          Print Terms of Service
        </Button>
      </div>
    </div>
  )
}