import './globals.css';
import Navbar from '@/components/Navbar';
import type {Metadata} from 'next';

/********* FONTS */
// https://fonts.google.com
// import {Inter, Inconsolata, Roboto} from 'next/font/google';
import {Inter} from 'next/font/google';
// const bodyFont = Roboto({ subsets: ['latin'], weight: ['400'] });
const bodyFont = Inter({ subsets: ['latin'] });
// const bodyFont = Inconsolata({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Next Sampler',
  description: 'A Next.js project with Typescript and TalwindCSS',
  keywords: 'Typescript, TailwindCSS, Next.js,'
};

export default function RootLayout( {children} : {children: React.ReactNode}) {
  return (
  <html lang='en'>  
    <body className={bodyFont.className}>
      <Navbar />
      <div className="max-w-3xl mx-auto py-10">{children}</div>
    </body>
  </html>

  );

} 
