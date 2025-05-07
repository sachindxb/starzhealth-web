'use client'

import Link from 'next/link'

export default function ClaimFormPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Medical Insurance Claim Form</h1>
      <p className="text-gray-700 mb-6 text-center">
        This page provides access to download, complete, and submit your medical claim form. 
        Please ensure you follow the instructions carefully to avoid any delays in processing.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Purpose of the Claim Form</h2>
      <p className="text-gray-700 mb-6">
        The claim form allows insured members to request reimbursement or direct payment for medical services received 
        at non-network providers or in cases where upfront payment was required. It is essential for verifying and 
        processing your claim in accordance with your health plan's benefits.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How to Complete the Form</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Fill in your personal details (Name, Insurance Number, Contact Information).</li>
        <li>Provide treatment details including date of service, provider name, and diagnosis.</li>
        <li>Ensure all invoices, receipts, and medical reports are attached to your submission.</li>
        <li>Sign and date the form before submission.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Submission Guidelines</h2>
      <p className="text-gray-700 mb-6">
        Submit your completed form and required documents through one of the following options:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Upload via your <Link href="/portal" className="text-blue-600 hover:underline">Patient Portal</Link></li>
        <li>Email to: <a href="mailto:claims@starzhealth.com" className="text-blue-600 hover:underline">claims@starzhealth.com</a></li>
        <li>Or deliver in-person at our main office: 123 Healthcare Ave, Medical City.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
      <p className="text-gray-700 mb-4">
        Claims must be submitted within <strong>30 days</strong> of receiving medical services unless otherwise 
        specified in your policy. Processing typically takes 10–15 business days once all required documents are received.
      </p>

      <div className="mt-8 text-center">
        <a
          href="/forms/starzhealth_claim_form.pdf"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          download
        >
          Download Claim Form
        </a>
      </div>
    </div>
  )
}
