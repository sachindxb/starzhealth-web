'use client'

import { useEffect, useState } from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

// Minimal Pagination inside this file itself (✅ no need for external file)
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === index + 1
              ? 'bg-[#2980bc] text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

// Minimal PaymentMethod type inside this file itself (✅ no need for external file)
interface PaymentMethod {
  id: number;
  brand: string;
  last4: string;
  expiry: string;
}

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const methodsPerPage = 5;

  useEffect(() => {
    // Dummy data for now
    const dummyPaymentMethods = [
      { id: 1, brand: 'Visa', last4: '4242', expiry: '12/24' },
      { id: 2, brand: 'Mastercard', last4: '1234', expiry: '11/25' },
      { id: 3, brand: 'Amex', last4: '3456', expiry: '10/26' },
      { id: 4, brand: 'Discover', last4: '5678', expiry: '09/24' },
      { id: 5, brand: 'Visa', last4: '9999', expiry: '01/26' },
      { id: 6, brand: 'Mastercard', last4: '8888', expiry: '03/27' },
    ];
    setPaymentMethods(dummyPaymentMethods);

    // 🔥 Future real production fetch
    /*
    async function fetchPaymentMethods() {
      const response = await fetch('/api/payment-methods');
      const data: PaymentMethod[] = await response.json();
      setPaymentMethods(data);
    }
    fetchPaymentMethods();
    */
  }, []);

  const indexOfLastMethod = currentPage * methodsPerPage;
  const indexOfFirstMethod = indexOfLastMethod - methodsPerPage;
  const currentMethods = paymentMethods.slice(indexOfFirstMethod, indexOfLastMethod);
  const totalPages = Math.ceil(paymentMethods.length / methodsPerPage);

  const handleRemove = (id: number) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payment Methods</h1>
        <Button variant="primary" onClick={() => alert('Add New Card clicked')}>
          Add New Card
        </Button>
      </div>

      {/* Payment Methods List */}
      {currentMethods.map(method => (
        <Card key={method.id} className="mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* Card logo placeholder */}
              <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-600">
                {method.brand}
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• {method.last4}</p>
                <p className="text-gray-600">Expires {method.expiry}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="small"
              className="text-red-600 hover:text-red-800"
              onClick={() => handleRemove(method.id)}
            >
              Remove
            </Button>
          </div>
        </Card>
      ))}

      {/* Pagination - show only if needed */}
      {paymentMethods.length > methodsPerPage && (
        <div className="flex justify-center mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  )
}
