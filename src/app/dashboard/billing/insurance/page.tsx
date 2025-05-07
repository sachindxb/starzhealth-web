'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

// Define Insurance Type
interface InsuranceInfo {
  id: number;
  provider: string;
  policyNumber: string;
}

export default function InsurancePage() {
  const [insurances, setInsurances] = useState<InsuranceInfo[]>([]);

  // ⚡ Future real API integration: Replace placeholder fetch
  useEffect(() => {
    async function fetchInsurances() {
      // Example future API call:
      // const response = await fetch('/api/insurance');
      // const data = await response.json();
      // setInsurances(data);

      // Demo placeholder:
      setInsurances([
        { id: 1, provider: 'BlueCross BlueShield', policyNumber: 'BCBS123456789' },
        { id: 2, provider: 'Aetna Health', policyNumber: 'AET987654321' },
      ]);
    }

    fetchInsurances();
  }, []);

  // Handlers
  const handleUpdateInsurance = (id: number) => {
    alert(`Update insurance ID: ${id}`);
    // Later: Redirect to update page or open modal
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Insurance Information</h1>
        <p className="text-gray-600 mt-2">Manage your insurance records easily with StarzHealth.</p>
      </div>

      {/* Insurance List */}
      {insurances.length === 0 ? (
        <p className="text-gray-600 text-center">No insurance information available.</p>
      ) : (
        insurances.map((insurance) => (
          <Card key={insurance.id} className="mb-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
              <div>
                <h3 className="text-[#2980bc] font-semibold text-lg">{insurance.provider}</h3>
                <p className="text-gray-600">Policy #: {insurance.policyNumber}</p>
              </div>

              {/* Update Button */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => handleUpdateInsurance(insurance.id)}
                >
                  Update Insurance
                </Button>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}
