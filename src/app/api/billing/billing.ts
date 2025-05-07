// src/app/api/billing/route.ts

import { NextResponse } from 'next/server'

// Temporary dummy billing data (for development/demo purposes)
const dummyBills = [
  {
    id: 1,
    date: '2024-04-15',
    type: 'Consultation',
    amount: 150.0,
    status: 'pending',
    dueDate: '2024-05-15',
    provider: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    insurance: {
      provider: 'HealthPlus Insurance',
      policyNumber: 'HP123456',
      coverage: '80%',
      copay: 30.0,
    },
    items: [
      { description: 'Initial Consultation', amount: 120.0 },
      { description: 'ECG Test', amount: 30.0 },
    ],
  },
  {
    id: 2,
    date: '2024-03-20',
    type: 'Laboratory',
    amount: 275.5,
    status: 'paid',
    paidDate: '2024-03-25',
    provider: 'StarzHealth Labs',
    department: 'Pathology',
    insurance: {
      provider: 'HealthPlus Insurance',
      policyNumber: 'HP123456',
      coverage: '80%',
      copay: 55.1,
    },
    items: [
      { description: 'Complete Blood Count', amount: 125.5 },
      { description: 'Lipid Panel', amount: 150.0 },
    ],
  },
  // Add more dummy bills as needed for testing
]

// This is the mock API handler
export async function GET() {
  return NextResponse.json(dummyBills)
}

/*
===========================================
For REAL production integration later:
===========================================

Instead of using the dummy array, replace inside GET() like this:

export async function GET() {
  try {
    const response = await fetch('https://api.example.com/billing', {
      headers: {
        Authorization: `Bearer YOUR_TOKEN_HERE`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch billing data')
    }

    const realBills = await response.json()
    return NextResponse.json(realBills)
  } catch (error) {
    console.error(error)
    return new NextResponse('Failed to load billing data', { status: 500 })
  }
}

===========================================
Notes:
- Replace https://api.example.com/billing with your real billing API endpoint.
- Replace YOUR_TOKEN_HERE with actual auth token logic (NextAuth, session, etc.)
- Add error handling as needed.
*/