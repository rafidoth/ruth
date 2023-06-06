import './globals.css'
import { Navbar } from '@/components/Navbar/Navbar'
export const metadata = {
  title: 'Ruth',
  description: 'Made with <3 by raphy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className='dark:bg-[#0d1117] dark:text-white'>
             <Navbar/>
            {children}
          </body>
    </html>
  )
}
