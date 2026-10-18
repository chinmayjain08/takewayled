import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TakewayLED | Heavy-Duty Commercial & Industrial LED Luminaires (Aasma Enterprises)',
  description: 'Jaipur-based ISO 9001:2015 certified manufacturer of high-efficacy commercial LED floodlights, UFO high bays, smart dolphin street lights, and integrated all-in-one solar luminaires. Direct B2B pricing & Dialux simulation support.',
  keywords: 'commercial LED floodlights, UFO high bay lights, solar street light manufacturer jaipur, aasma enterprises, industrial luminaires, dolphin street light, stadium floodlights, IP65 IP66 LED rajasthan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="bg-industrial-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
