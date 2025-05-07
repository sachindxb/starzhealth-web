'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      clinicName: 'HeartCare Clinic',
      address: '123 Health St, Dubai',
      image: '/doctors/doctor-female.png',
      availability: 'Mon, Wed, Fri',
      languages: ['English', 'Spanish'],
      mapLink: 'https://maps.google.com?q=HeartCare+Clinic+Dubai',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      clinicName: 'NeuroHealth Center',
      address: '456 Wellness Ave, Abu Dhabi',
      image: '/doctors/doctor-male.png',
      availability: 'Tue, Thu, Sat',
      languages: ['English', 'Mandarin'],
      mapLink: 'https://maps.google.com?q=NeuroHealth+Center+Abu+Dhabi',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      clinicName: 'KidsCare Hospital',
      address: '789 Family Rd, Sharjah',
      image: '/doctors/doctor-female.png',
      availability: 'Mon, Tue, Thu',
      languages: ['English', 'Spanish', 'Portuguese'],
      mapLink: 'https://maps.google.com?q=KidsCare+Hospital+Sharjah',
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      clinicName: 'OrthoPlus Clinic',
      address: '321 Bone St, Dubai',
      image: '/doctors/doctor-male.png',
      availability: 'Wed, Thu, Fri',
      languages: ['English'],
      mapLink: 'https://maps.google.com?q=OrthoPlus+Clinic+Dubai',
    },
  ]

  const specialties = ['all', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics']

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find a Doctor</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our expert medical team. Filter by specialty or search by name. (Note: Booking is
          not available yet.)
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Search by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-3 aspect-h-2 mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="object-cover rounded-lg w-full h-48"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <Badge text={doctor.specialty} variant="primary" className="mb-2" />
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Clinic:</span> {doctor.clinicName}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Available:</span> {doctor.availability}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Address:</span> {doctor.address}
            </p>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {doctor.languages.map((language) => (
                <Badge key={language} text={language} variant="info" size="small" />
              ))}
            </div>
            <div className="flex">
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open(doctor.mapLink, '_blank')}
              >
                Open in Maps
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredDoctors.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No doctors found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
