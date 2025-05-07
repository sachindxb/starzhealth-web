'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import Link from 'next/link'
import styles from '@/UIx/Home.module.css'

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section 
        className={`${styles.parallaxSection} ${styles.heroSection}`}
        ref={el => sectionRefs.current[0] = el}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to StarzHealth TPA Services LLC
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Simplifying healthcare administration for individuals, companies, and providers across the UAE.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button 
              variant="primary"
              className="bg-[#2980bc] hover:bg-[#21b6d5] transform hover:scale-105"
            >
              Explore Our Services
            </Button>
            <Button 
              variant="secondary"
              className="bg-white text-[#2980bc] hover:bg-[#2980bc] hover:text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose StarzHealth */}
      <section 
        className={`${styles.parallaxSection} ${styles.whyChooseSection}`}
        ref={el => sectionRefs.current[1] = el}
      >
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-semibold mb-12 text-center text-white">
            Why Choose StarzHealth?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🏥',
                title: 'Wide Provider Networks',
                description: 'Access to extensive healthcare facilities across the UAE'
              },
              {
                icon: '💰',
                title: 'Affordable Solutions',
                description: 'Competitive plans for individuals and companies'
              },
              {
                icon: '🤝',
                title: 'Dedicated Claims Support',
                description: '24/7 assistance for all your healthcare needs'
              },
              {
                icon: '🌍',
                title: 'International Assistance',
                description: 'Global healthcare coverage when you need it'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={styles.chooseCard}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-[#2980bc] font-semibold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4" ref={el => sectionRefs.current[2] = el}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Policy Management',
                description: 'Efficient management of insurance policies for smooth administration.'
              },
              {
                title: 'Claims Management',
                description: 'Quick and transparent claim processing for maximum convenience.'
              },
              {
                title: 'Provider Network Management',
                description: 'Connecting members to trusted clinics, hospitals, and healthcare providers.'
              },
              {
                title: 'Insurance Product Design',
                description: 'Customized health plan design and pricing solutions.'
              },
              {
                title: 'Overseas Healthcare Assistance',
                description: 'Global support for emergencies and medical travel.'
              }
            ].map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <h3 className="text-xl font-bold text-[#2980bc] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-20 px-4" ref={el => sectionRefs.current[3] = el}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
            Trusted by Thousands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1M+', label: 'Members Managed' },
              { value: '100+', label: 'Healthcare Partners' },
              { value: '24/7', label: 'Support Availability' },
              { value: '40+', label: 'Years Combined Experience' }
            ].map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <p className="text-4xl font-bold text-[#2980bc] mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section 
        className={`${styles.parallaxSection} ${styles.ctaSection} py-20`}
        ref={el => sectionRefs.current[4] = el}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-semibold mb-8">
            Ready to experience seamless healthcare administration?
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button variant="primary">Contact Us</Button>
            <Link href="/about">
              <Button variant="secondary">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
