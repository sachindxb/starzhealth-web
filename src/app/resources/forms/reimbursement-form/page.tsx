'use client'

import Link from 'next/link'

export default function ReimbursementFormPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Reimbursement Request Form</h1>
      <p className="text-gray-700 mb-6 text-center">
        If you have paid out-of-pocket for medical expenses covered by your insurance plan, use this page to access the 
        reimbursement request form and learn how to submit it.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What is the Reimbursement Form?</h2>
      <p className="text-gray-700 mb-6">
        This form is designed for members who have paid directly for medical services and seek repayment from 
        their insurance coverage. Typical cases include overseas treatment or emergency care in non-network facilities.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Steps to Complete Your Request</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Complete all personal and policy information fields accurately.</li>
        <li>Attach valid invoices, receipts, and supporting medical documents.</li>
        <li>Confirm your bank details for smooth payment processing.</li>
        <li>Sign and date the form before submission.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Submitting Your Request</h2>
      <p className="text-gray-700 mb-6">
        You can submit your reimbursement form and documents through:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Uploading via your <Link href="/portal" className="text-blue-600 hover:underline">Patient Portal</Link></li>
        <li>Email: <a href="mailto:reimbursement@starzhealth.com" className="text-blue-600 hover:underline">reimbursement@starzhealth.com</a></li>
        <li>Or in-person delivery at our office: 123 Healthcare Ave, Medical City.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
      <p className="text-gray-700 mb-4">
        Reimbursement claims are reviewed and processed within <strong>10–20 business days</strong> upon receipt of 
        complete documentation.
      </p>

      <div className="mt-8 text-center">
        <a
          href="/forms/starzhealth_reimbursement_form.pdf"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          download
        >
          Download Reimbursement Form
        </a>
      </div>
    </div>
  )
}
