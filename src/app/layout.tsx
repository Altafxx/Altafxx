import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const font = Josefin_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Daniel Altaf',
  description: 'Just a simple software engineer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen flex flex-col text-justify`}>
        {/* <main className='py-12 px-8 md:px-12 xl:px-24 flex-1 overflow-y-auto relative'> */}
        <main className='py-12 px-8 md:px-12 xl:px-24 flex-1 overflow-y-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
