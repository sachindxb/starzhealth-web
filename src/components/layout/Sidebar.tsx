'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItem {
  name: string
  path: string
  icon: JSX.Element
  subItems?: { name: string; path: string }[]
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const pathname = usePathname()

  const menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
    },
    {
      name: 'Appointments',
      path: '/appointments',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      subItems: [
        { name: 'Upcoming', path: '/appointments/upcoming' },
        { name: 'Past', path: '/appointments/past' },
        { name: 'Schedule New', path: '/appointments/new' },
      ],
    },
    {
      name: 'Medical Records',
      path: '/records',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      subItems: [
        { name: 'Test Results', path: '/records/tests' },
        { name: 'Medications', path: '/records/medications' },
        { name: 'History', path: '/records/history' },
      ],
    },
    {
      name: 'Messages',
      path: '/messages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Billing',
      path: '/billing',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      subItems: [
        { name: 'Invoices', path: '/billing/invoices' },
        { name: 'Payment Methods', path: '/billing/payment-methods' },
        { name: 'Insurance', path: '/billing/insurance' },
      ],
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  return (
    <aside
      className={`
        bg-white shadow-lg transition-all duration-300
        ${isCollapsed ? 'w-20' : 'w-64'}
        min-h-screen fixed left-0 top-0
      `}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 bg-white rounded-full p-1 shadow-md"
      >
        <svg
          className={`w-4 h-4 text-gray-600 transform transition-transform ${
            isCollapsed ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Logo */}
      <div className={`p-4 ${isCollapsed ? 'text-center' : ''}`}>
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">SH</span>
          {!isCollapsed && <span className="text-xl font-bold">StarzHealth</span>}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-8">
        {menuItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.path}
              className={`
                flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600
                ${pathname === item.path ? 'bg-blue-50 text-blue-600' : ''}
              `}
              onClick={() => {
                if (item.subItems) {
                  setExpandedItem(expandedItem === item.name ? null : item.name)
                }
              }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6">
                {item.icon}
              </span>
              {!isCollapsed && (
                <>
                  <span className="ml-3">{item.name}</span>
                  {item.subItems && (
                    <svg
                      className={`ml-auto w-4 h-4 transform transition-transform ${
                        expandedItem === item.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </>
              )}
            </Link>

            {/* Subitems */}
            {!isCollapsed && item.subItems && expandedItem === item.name && (
              <div className="bg-gray-50">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.path}
                    href={subItem.path}
                    className={`
                      block pl-12 pr-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600
                      ${pathname === subItem.path ? 'bg-blue-50 text-blue-600' : ''}
                    `}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar