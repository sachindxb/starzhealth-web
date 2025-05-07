import { NextResponse } from 'next/server';

const dummyPaymentMethods = [
  { id: 1, brand: 'Visa', last4: '4242', expiry: '12/24' },
  { id: 2, brand: 'Mastercard', last4: '1234', expiry: '11/25' },
];

export async function GET() {
  return NextResponse.json(dummyPaymentMethods);

  // 🚀 Future real production:
  /*
  const response = await fetch('https://api.yourbackend.com/payment-methods');
  const data = await response.json();
  return NextResponse.json(data);
  */
}
