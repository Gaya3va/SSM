// ssm/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'   // <-- important

const inter = Inter({ subsets: ['latin'] }) // <-- important

export const metadata = {
  title: 'SSM — Skill Sharing Marketplace',
  description: 'Micro-sessions, barter credits, local learning.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* NAVBAR */}
        <nav className="w-full py-4 bg-white shadow-sm mb-8">
  <div className="container mx-auto flex justify-between items-center">
    <a href="/" className="text-xl font-bold text-teal-600">SSM</a>

    <div className="flex gap-6 text-gray-700">
      <a href="/" className="hover:text-teal-600">Browse</a>
      <a href="/teach" className="hover:text-teal-600">Teach</a>
      <a href="/dashboard" className="hover:text-teal-600">Dashboard</a>
    </div>
  </div>
</nav>


        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>

        <footer className="text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} SSM — Built for your campus.
        </footer>
      </body>
    </html>
  )
}
