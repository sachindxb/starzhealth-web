import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/common/Chatbot'; // ✅ Added Chatbot import
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StarzHealth - Healthcare Services',
  description: 'Quality healthcare services for a better, healthier tomorrow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-[100px] md:pt-[120px]">
            {/* Adjust these values based on your header height */}
            {children}
          </main>
          <Footer />
          <Chatbot /> {/* ✅ Chatbot added globally */}
        </div>
      </body>
    </html>
  );
}
