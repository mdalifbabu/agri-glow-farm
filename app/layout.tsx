import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AgriGlowFarm - প্রিমিয়াম জৈব পণ্যের উৎস',
  description: 'জৈব খাদ্য, ফলমূল ও শাকসবজির জন্য আপনার বিশ্বস্ত জৈব দোকান',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={`${inter.className} bg-amber-50`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}