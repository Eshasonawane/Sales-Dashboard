'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">Sales Dashboard</h1>
        <p className="text-xl text-gray-600">Welcome to the Sales Analytics Dashboard</p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/dashboard"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}

