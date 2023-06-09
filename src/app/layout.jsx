'use client'

import './globals.css'
import { Navbar } from '@/components/Navbar/Navbar'
export const metadata = {
  title: 'Ruth',
  description: 'Made with <3 by raphy',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
          <body className='bg-amber-100/[0.2] dark:bg-ruth-bg-900 dark:text-white'>
             <Navbar/>
            {children}
          </body>
    </html>
  )
}
