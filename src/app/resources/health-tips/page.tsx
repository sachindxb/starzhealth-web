'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'
import Input from '@/components/common/Input'

export default function HealthTipsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedTip, setSelectedTip] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'All Tips' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'preventive', name: 'Preventive Care' },
  ]

  const healthTips = [
    {
      id: 1,
      title: 'Building a Healthy Sleep Routine',
      category: 'wellness',
      author: 'Dr. Sarah Johnson',
      date: '2024-04-01',
      readTime: '5 min',
      image: '/health-tips/sleep.jpg',
      preview: 'Discover how to improve your sleep quality with these evidence-based tips.',
      content: {
        introduction: 'Quality sleep is essential for overall health and well-being...',
        tips: [
          'Maintain a consistent sleep schedule',
          'Create a relaxing bedtime routine',
          'Optimize your sleep environment',
          'Limit screen time before bed',
        ],
        conclusion: 'Implementing these habits can significantly improve your sleep quality...',
      },
      tags: ['Sleep', 'Wellness', 'Health Habits'],
    },
    {
      id: 2,
      title: 'Balanced Nutrition Basics',
      category: 'nutrition',
      author: 'Dr. Michael Chen',
      date: '2024-03-28',
      readTime: '7 min',
      image: '/health-tips/nutrition.jpg',
      preview: 'Learn the fundamentals of maintaining a balanced diet for optimal health.',
      content: {
        introduction: 'Good nutrition is the foundation of a healthy lifestyle...',
        tips: [
          'Include a variety of fruits and vegetables',
          'Choose whole grains over refined grains',
          'Monitor portion sizes',
          'Stay hydrated throughout the day',
        ],
        conclusion: 'Making mindful food choices can lead to better health outcomes...',
      },
      tags: ['Nutrition', 'Diet', 'Healthy Eating'],
    },
    // Add more health tips as needed
  ]

  const filteredTips = healthTips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.preview.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || tip.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Health Tips & Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert advice and guidance for maintaining your health and wellness
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <Input
          type="text"
          placeholder="Search health tips..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xl mx-auto"
        />

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Tips */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredTips.map((tip) => (
          <Card
            key={tip.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedTip(selectedTip === tip.id ? null : tip.id)}
          >
            {/* Image */}
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <div className="w-full h-48 bg-gray-200 rounded-lg">
                {/* Replace with actual image */}
                <div className="flex items-center justify-center h-full text-gray-400">
                  Image Placeholder
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {tip.title}
                </h3>
                <Badge
                  text={categories.find(c => c.id === tip.category)?.name || ''}
                  variant="info"
                  size="small"
                />
              </div>

              <p className="text-gray-600">{tip.preview}</p>

              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>{tip.author}</span>
                <span>•</span>
                <span>{tip.readTime} read</span>
              </div>

              {/* Expanded Content */}
              {selectedTip === tip.id && (
                <div className="mt-4 pt-4 border-t">
                  <div className="prose prose-blue max-w-none">
                    <p className="mb-4">{tip.content.introduction}</p>
                    <ul className="list-disc pl-5 mb-4">
                      {tip.content.tips.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                      ))}
                    </ul>
                    <p>{tip.content.conclusion}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tip.tags.map((tag) => (
                      <Badge
                        key={tag}
                        text={tag}
                        variant="primary"
                        size="small"
                      />
                    ))}
                  </div>
                </div>
              )}

              <Button
                variant="outline"
                size="small"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation()
                  window.location.href = `/resources/health-tips/${tip.id}`
                }}
              >
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredTips.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No health tips found matching your criteria.</p>
        </div>
      )}

      {/* Newsletter Signup */}
      <Card className="bg-blue-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Stay Updated with Health Tips
          </h2>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter for weekly health tips and updates.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button variant="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </Card>

      {/* Categories Grid */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Browse by Category
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.filter(c => c.id !== 'all').map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setActiveCategory(category.id)}
            >
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600">
                Explore tips and advice related to {category.name.toLowerCase()}.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}