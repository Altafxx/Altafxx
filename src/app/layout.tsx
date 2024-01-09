import type { Metadata } from 'next'
import Head from 'next/head'
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
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
      </Head>
      <body className={`${font.className} min-h-screen flex flex-col text-justify`}>
        {/* <main className='py-12 px-8 md:px-12 xl:px-24 flex-1 overflow-y-auto relative'> */}
        <main className='py-12 px-8 md:px-12 xl:px-24 flex-1 overflow-y-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
