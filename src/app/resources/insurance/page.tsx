'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'
import Modal from '@/components/common/Modal'
import Input from '@/components/common/Input'
import Image from 'next/image'

export default function InsurancePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<any>(null)

  const insuranceProviders = [
    {
      name: 'BlueCross BlueShield',
      plans: ['PPO', 'HMO', 'EPO'],
      coverage: ['Primary Care', 'Specialty Care', 'Emergency', 'Preventive Care'],
      verificationRequired: true,
      logo: '/insurance/insurance-1.png',
    },
    {
      name: 'Aetna',
      plans: ['PPO', 'HMO'],
      coverage: ['Primary Care', 'Specialty Care', 'Preventive Care'],
      verificationRequired: true,
      logo: '/insurance/insurance-1.png',
    },
    {
      name: 'Cigna',
      plans: ['Open Access', 'HMO'],
      coverage: ['Primary Care', 'Emergency', 'Preventive Care'],
      verificationRequired: true,
      logo: '/insurance/insurance-1.png',
    },
    {
      name: 'Medicare',
      plans: ['Part A', 'Part B', 'Advantage'],
      coverage: ['Primary Care', 'Specialty Care', 'Emergency'],
      verificationRequired: false,
      logo: '/insurance/insurance-1.png',
    },
  ]

  const commonQuestions = [
    {
      question: 'How do I verify my insurance coverage?',
      answer: 'You can verify your coverage by providing your insurance card information through our online portal or by calling our billing department.',
    },
    {
      question: 'What if my insurance plan changes?',
      answer: 'Please notify our billing department as soon as possible if your insurance coverage changes to ensure continuous coverage for your care.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for patients who need assistance with their medical expenses. Contact our billing department to discuss options.',
    },
  ]

  const filteredProviders = insuranceProviders.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Insurance Information
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about accepted insurance plans and coverage options at StarzHealth
        </p>
      </div>

      {/* Search Insurance Providers */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search insurance providers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xl mx-auto"
        />
      </div>

      {/* Insurance Providers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProviders.map((provider) => (
          <Card
            key={provider.name}
            className="hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <Badge
                  text={provider.verificationRequired ? 'Verification Required' : 'Direct Billing'}
                  variant={provider.verificationRequired ? 'warning' : 'success'}
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">{provider.name}</h3>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 mb-1">Accepted Plans</p>
                <div className="flex flex-wrap gap-2">
                  {provider.plans.map((plan) => (
                    <Badge
                      key={plan}
                      text={plan}
                      variant="info"
                      size="small"
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 mb-1">Coverage</p>
                <div className="flex flex-wrap gap-2">
                  {provider.coverage.map((item) => (
                    <Badge
                      key={item}
                      text={item}
                      variant="primary"
                      size="small"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedPlan(provider)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Common Questions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Common Insurance Questions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonQuestions.map((item, index) => (
            <Card key={index}>
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <Card>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            Our insurance specialists are here to assist you with any questions.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
            <Button variant="primary" onClick={() => window.location.href = '/resources/faq'}>
              View FAQ
            </Button>
          </div>
        </div>
      </Card>

      {/* Insurance Plan Details Modal */}
      <Modal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        title={selectedPlan?.name}
      >
        {selectedPlan && (
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Accepted Plans</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPlan.plans.map((plan: string) => (
                  <Badge key={plan} text={plan} variant="info" />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Coverage Details</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPlan.coverage.map((item: string) => (
                  <Badge key={item} text={item} variant="primary" />
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
