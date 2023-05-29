import './globals.css'

export const metadata = {
  title: 'Ruth',
  description: 'Made with <3 by raphy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className='dark:bg-ruth-bg-900 dark:text-white'>{children}</body>
    </html>
  )
}
