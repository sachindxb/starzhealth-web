// src/types/dashboard.ts

export interface Appointment {
  id: number;
  doctor: string;
  date: string;
  time: string;
  type: string;
}

export interface Prescription {
  id: number;
  medication: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed';
  refillsRemaining: number;
  prescribedBy: string;
  instructions: string;
  pharmacy: {
    name: string;
    address: string;
    phone: string;
  };
  sideEffects: string[];
}

export interface MedicalRecord {
  id: number;
  type: string;
  date: string;
  doctor: string;
  department: string;
  status: string;
  description: string;
  details: any; // You can later replace 'any' with better typing for tests/findings
}

export interface Invoice {
  id: number;
  date: string;
  amount: number;
  status: 'paid' | 'unpaid';
}

export interface PaymentMethod {
  id: number;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
}
