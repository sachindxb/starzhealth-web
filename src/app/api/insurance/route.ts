import { NextResponse } from 'next/server';

// Mock Insurance Data
const mockInsurances = [
  {
    id: 1,
    provider: 'BlueCross BlueShield',
    policyNumber: 'BCBS123456789',
  },
  {
    id: 2,
    provider: 'Aetna Health',
    policyNumber: 'AET987654321',
  },
];

// GET Request Handler
export async function GET() {
  try {
    // ⚡ Future: Fetch from database instead of static list
    return NextResponse.json(mockInsurances, { status: 200 });
  } catch (error) {
    console.error('Error fetching insurance data:', error);
    return NextResponse.json({ message: 'Failed to fetch insurance data.' }, { status: 500 });
  }
}
