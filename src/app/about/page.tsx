'use client'

import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function AboutPage() {
  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
{/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About StarzHealth
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Providing exceptional healthcare services with a commitment to quality, 
          compassion, and innovation since 2024.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card title="Our Mission">
          <p className="text-gray-600">
            To deliver exceptional healthcare services that improve the quality of life 
            for our patients through innovative treatments, compassionate care, and 
            a patient-centered approach.
          </p>
        </Card>

        <Card title="Our Vision">
          <p className="text-gray-600">
            To be the leading healthcare provider, recognized for excellence in patient 
            care, innovative medical practices, and positive community impact.
          </p>
        </Card>
      </div>

      {/* Core Values */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-gray-600">
              We treat each patient with kindness, empathy, and respect.
            </p>
          </Card>

          <Card className="text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for the highest standards in healthcare delivery.
            </p>
          </Card>

          <Card className="text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace advanced technology and modern medical practices.
            </p>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Button
          variant="primary"
          size="large"
          onClick={() => window.location.href = '/contact'}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  )
}