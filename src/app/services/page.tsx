'use client'

import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Primary Care',
      description: 'Comprehensive healthcare services for patients of all ages, including routine check-ups, preventive care, and chronic disease management.',
      features: ['Regular Check-ups', 'Vaccinations', 'Health Screenings', 'Chronic Disease Management'],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Specialty Care',
      description: 'Expert medical care in specific areas of medicine, delivered by experienced specialists using advanced technology.',
      features: ['Cardiology', 'Orthopedics', 'Neurology', 'Dermatology'],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response times and state-of-the-art emergency facilities.',
      features: ['24/7 Availability', 'Rapid Response', 'Trauma Care', 'Critical Care'],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Telehealth Services',
      description: 'Virtual healthcare consultations providing convenient access to medical professionals from your home.',
      features: ['Video Consultations', 'Digital Prescriptions', 'Remote Monitoring', 'Follow-up Care'],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
{/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive healthcare services designed to meet all your medical needs
          with expertise and compassion.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <Badge
                      key={feature}
                      text={feature}
                      variant="info"
                      size="small"
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => window.location.href = `/services/${service.title.toLowerCase().replace(' ', '-')}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Need Immediate Assistance?
        </h2>
        <p className="text-gray-600 mb-6">
          Our healthcare professionals are available 24/7 to help you.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            variant="primary"
            size="large"
            onClick={() => window.location.href = '/appointments'}
          >
            Book Appointment
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}