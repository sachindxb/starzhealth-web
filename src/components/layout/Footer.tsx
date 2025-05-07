'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from '@/UIx/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div className="col-span-1 flex flex-col justify-between h-full">
            <div>
              <Link href="/" className={styles.logoContainer}>
                <Image
                  src="/starzhealth.png"
                  alt="StarzHealth Logo"
                  width={120}
                  height={32}
                  className="mb-6"
                  priority
                />
              </Link>
              <p className="text-gray-600 mb-8">
                StarzHealth TPA Services LLC is committed to providing seamless and efficient healthcare administration services across the UAE.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className={`text-gray-400 hover:text-[#2980bc] ${styles.socialIcon}`}>
                {/* Twitter Icon */}
              </a>
              <a href="https://linkedin.com" className={`text-gray-400 hover:text-[#2980bc] ${styles.socialIcon}`}>
                {/* LinkedIn Icon */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
                <li><Link href="/services/telehealth" className={styles.footerLink}>Telehealth</Link></li>
                <li><Link href="/portal" className={styles.footerLink}>Patient Portal</Link></li>
                <li><Link href="/portal" className={styles.footerLink}>Provider's Portal</Link></li>
              </ul>
            </div>
          </div>

          {/* Patient Resources */}
          <div className="col-span-1 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Patient Resources
              </h3>
              <ul className="space-y-4">
                <li><Link href="/resources/forms/reimbursement-form" className={styles.footerLink}>Reimbursement Form</Link></li>
                <li><Link href="/resources/forms/claim-form" className={styles.footerLink}>Claim Form</Link></li>
                <li><Link href="/resources/insurance" className={styles.footerLink}>Insurance</Link></li>
                <li><Link href="/resources/faq" className={styles.footerLink}>FAQs</Link></li>
                <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-600">
                  <span className="font-medium">Address:</span> 123 Healthcare Ave, Medical City, MC 12345
                </li>
                <li className="text-gray-600">
                  <span className="font-medium">Phone:</span> (555) 123-4567
                </li>
                <li className="text-gray-600">
                  <span className="font-medium">Email:</span> info@starzhealth.com
                </li>
                <li className="text-gray-600">
                  <span className="font-medium">Hours:</span> Mon-Fri: 8am-6pm
                </li>
              </ul>
              {/* Small logos: LinkedIn & Instagram */}
              <div className="flex space-x-4 mt-4">
                <a href="https://linkedin.com" className="block w-6 h-6">
                  <Image
                    src="/social/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://instagram.com" className="block w-6 h-6">
                  <Image
                    src="/social/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} StarzHealth. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className={`text-sm ${styles.footerLink}`}>Privacy Policy</Link>
              <Link href="/terms" className={`text-sm ${styles.footerLink}`}>Terms of Service</Link>
              <Link href="/accessibility" className={`text-sm ${styles.footerLink}`}>Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
