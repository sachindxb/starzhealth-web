'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'
import Input from '@/components/common/Input'

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const providers = [
    {
      id: 1,
      name: 'Al Noor Hospital',
      type: 'Hospital',
      address: '123 Sheikh Zayed Road, Dubai',
      phone: '+971-4-123-4567',
      languages: ['English', 'Arabic'],
      image: '/providers/provider-2.png', // Add an image in /public/providers/
      mapsLink: 'https://maps.google.com/?q=Al+Noor+Hospital',
    },
    {
      id: 2,
      name: 'Aster Clinic',
      type: 'Clinic',
      address: '456 Al Nahda Street, Sharjah',
      phone: '+971-6-987-6543',
      languages: ['English', 'Hindi'],
      image: '/providers/provider-2.png',
      mapsLink: 'https://maps.google.com/?q=Aster+Clinic',
    },
    {
      id: 3,
      name: 'Emirates Diagnostic Center',
      type: 'Diagnostic Center',
      address: '789 Airport Road, Abu Dhabi',
      phone: '+971-2-555-7890',
      languages: ['English'],
      image: '/providers/provider-2.png',
      mapsLink: 'https://maps.google.com/?q=Emirates+Diagnostic+Center',
    },
    {
      id: 4,
      name: 'Starz Dental Clinic',
      type: 'Specialty Clinic',
      address: 'Marina Walk, Dubai',
      phone: '+971-4-567-8901',
      languages: ['English', 'Filipino'],
      image: '/providers/provider-2.png',
      mapsLink: 'https://maps.google.com/?q=Starz+Dental+Clinic',
    },
  ]

  const types = ['all', 'Hospital', 'Clinic', 'Diagnostic Center', 'Specialty Clinic']

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || provider.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Healthcare Providers
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our trusted network of hospitals, clinics, and healthcare centers available across the UAE.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Search by name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Providers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProviders.map(provider => (
          <Card key={provider.id} className="hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-3 aspect-h-2 mb-4">
              <img
                src={provider.image}
                alt={provider.name}
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
            <Badge text={provider.type} variant="primary" className="mb-2" />
            <p className="text-gray-600 mb-2">{provider.address}</p>
            <p className="text-gray-600 mb-2">Phone: {provider.phone}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {provider.languages.map(language => (
                <Badge
                  key={language}
                  text={language}
                  variant="info"
                  size="small"
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <Button
                variant="primary"
                size="small"
                onClick={() => window.open(provider.mapsLink, '_blank')}
              >
                Open in Maps
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredProviders.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No providers found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
