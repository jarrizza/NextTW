import Link from 'next/link';
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Contact Page</h1>
      <Link href="/" className="text-xl text-blue-500 inline-block mt-8">
      Back Home
      </Link>
    </div>
  );
}
