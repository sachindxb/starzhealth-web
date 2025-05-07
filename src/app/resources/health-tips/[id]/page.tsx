'use client'

import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'

export default function HealthTipPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <Badge text="Health & Wellness" variant="primary" className="mb-4" />
        <h1 className="text-3xl font-bold mb-4">Health Tip Title</h1>
        <div className="prose max-w-none">
          <p>Health tip content goes here...</p>
        </div>
      </Card>
    </div>
  )
}