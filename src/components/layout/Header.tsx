// Header.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/UIx/Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* Desktop Header */}
      <div className={styles.topBar}>
        <nav className={styles.leftMenu}>
          <div className={styles.navItem}>
            <button className={styles.navLink}>
              Services <span className={styles.arrow}>▼</span>
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/services/telehealth">Telehealth</Link>
              <Link href="/portal">Provider's Portal</Link>
            </div>
          </div>

          <div className={styles.navItem}>
            <button className={styles.navLink}>
              Find <span className={styles.arrow}>▼</span>
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/doctors">Find a Doctor</Link>
              <Link href="/providers">Find a Provider</Link>
            </div>
          </div>

          <div className={styles.navItem}>
            <button className={styles.navLink}>
              Patient Resources <span className={styles.arrow}>▼</span>
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/portal">Patient Portal</Link>
              <Link href="/resources/insurance">Insurance</Link>
              <Link href="/resources/faq">FAQs</Link>
              <Link href="/resources/forms/reimbursement-form">Reimbursement Form</Link>
              <Link href="/resources/forms/claim-form">Claim Form</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </nav>

        <div className={`${styles.logoWrapper} ${scrolled ? styles.logoScrolled : ''}`}>
          <Link href="/">
          <Image
            src="/starzhealth.png"
            alt="StarzHealth Logo"
            width={scrolled ? 140 : 160} // Slightly reduced sizes
            height={scrolled ? 55 : 65}  // Adjusted for proportion
            className={styles.logo}
            priority
          />
          </Link>
        </div>

        <div className={styles.rightMenu}>
          <Link href="/auth/login" className={styles.loginButton}>
            Login
          </Link>
          <div className={styles.tollFree}>
            <span className={styles.tollLabel}>Toll-Free</span>
            <span className={styles.tollNumber}>800-STARZ-911</span>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={styles.mobileBar}>
        <Link href="/">
        <Image
          src="/starzhealth.png"
          alt="StarzHealth Logo"
          width={120}
          height={50}
          className={styles.logoMobile}
          priority
        />
        </Link>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
        {menuOpen && (
          <nav className={styles.mobileMenu}>
            <Link href="/services/telehealth" onClick={() => setMenuOpen(false)}>Telehealth</Link>
            <Link href="/portal" onClick={() => setMenuOpen(false)}>Provider's Portal</Link>
            <Link href="/doctors" onClick={() => setMenuOpen(false)}>Find a Doctor</Link>
            <Link href="/providers" onClick={() => setMenuOpen(false)}>Find a Provider</Link>
            <Link href="/portal" onClick={() => setMenuOpen(false)}>Patient Portal</Link>
            <Link href="/resources/insurance" onClick={() => setMenuOpen(false)}>Insurance</Link>
            <Link href="/resources/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
            <Link href="/resources/reimbursement-form" onClick={() => setMenuOpen(false)}>Reimbursement Form</Link>
            <Link href="/resources/claim-form" onClick={() => setMenuOpen(false)}>Claim Form</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link href="/auth/login" className={styles.loginButtonMobile} onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <div className={styles.tollFreeMobile}>800-STARZ-911</div>
          </nav>
        )}
      </div>
    </header>
  );
}