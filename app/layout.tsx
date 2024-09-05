import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zara-inspired App',
  description: 'A minimalist, fashion-forward app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4 border-b border-black">
          <div className="container flex justify-between items-center">
            <h1 className="text-2xl font-bold">BRAND NAME</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:underline">WOMEN</a></li>
                <li><a href="#" className="hover:underline">MEN</a></li>
                <li><a href="#" className="hover:underline">KIDS</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
