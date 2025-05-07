'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Navigation items
  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Services',
      path: '/services',
      subItems: [
        { name: 'Primary Care', path: '/services/primary-care' },
        { name: 'Specialty Care', path: '/services/specialty-care' },
        { name: 'Emergency', path: '/services/emergency' },
        { name: 'Telehealth', path: '/services/telehealth' },
      ],
    },
    {
      name: 'Find a Doctor',
      path: '/doctors',
    },
    {
      name: 'Patient Resources',
      path: '/resources',
      subItems: [
        { name: 'Patient Portal', path: '/portal' },
        { name: 'Forms', path: '/resources/forms' },
        { name: 'Insurance', path: '/resources/insurance' },
        { name: 'FAQs', path: '/resources/faqs' },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Main navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`
                    px-3 py-2 rounded-md text-sm font-medium
                    ${
                      pathname === item.path
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }
                  `}
                >
                  {item.name}
                  {item.subItems && (
                    <span className="ml-1">▼</span>
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.subItems && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className={`
                            block px-4 py-2 text-sm
                            ${
                              pathname === subItem.path
                                ? 'bg-gray-100 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }
                          `}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/appointments"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Book Appointment
            </Link>
            <Link
              href="/emergency"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Emergency
            </Link>
          </div>

          {/* Emergency contact */}
          <div className="hidden md:flex items-center">
            <div className="text-right">
              <p className="text-sm text-gray-500">24/7 Emergency</p>
              <p className="text-lg font-bold text-blue-600">1-800-STARZ-911</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar