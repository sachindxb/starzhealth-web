// src/app/api/invoices/route.ts

import { NextResponse } from 'next/server';

// Fake data for testing purposes
const dummyInvoices = [
  {
    id: 1,
    invoiceNumber: 'INV-0001',
    date: '2024-04-01',
    amount: 150.00,
    status: 'unpaid', // can be 'unpaid', 'paid', 'overdue'
  },
  {
    id: 2,
    invoiceNumber: 'INV-0002',
    date: '2024-04-05',
    amount: 250.00,
    status: 'paid',
  },
  {
    id: 3,
    invoiceNumber: 'INV-0003',
    date: '2024-04-10',
    amount: 180.50,
    status: 'overdue',
  },
  {
    id: 4,
    invoiceNumber: 'INV-0004',
    date: '2024-04-15',
    amount: 90.25,
    status: 'unpaid',
  },
  {
    id: 5,
    invoiceNumber: 'INV-0005',
    date: '2024-04-20',
    amount: 320.75,
    status: 'paid',
  },
];

// ✅ API Handler
export async function GET() {
  return NextResponse.json(dummyInvoices);
}

/* 
🚀 Future Production Notes:
- Replace 'dummyInvoices' with real database fetch.
- Example (when connected to a DB):

import { getInvoicesFromDatabase } from '@/lib/database';

export async function GET() {
  const invoices = await getInvoicesFromDatabase();
  return NextResponse.json(invoices);
}

- Or if calling an external API:

export async function GET() {
  const response = await fetch('https://your-backend.com/api/invoices');
  const data = await response.json();
  return NextResponse.json(data);
}

*/
