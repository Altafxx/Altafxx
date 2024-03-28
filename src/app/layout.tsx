import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import './globals.css'

const font = Inter({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://danielaltaf.dev/'),
  title: 'Daniel Altaf',
  description: 'Just a simple software engineer portfolio',
  openGraph: {
    images: "https://danielaltaf.dev/api/og",
    title: "Daniel Altaf",
    description: "Just a simple software engineer portfolio",
    url: "https://danielaltaf.dev",
    type: "website"
  },
  twitter: {
    images: "https://danielaltaf.dev/api/og",
    card: "summary_large_image",
    title: "Daniel Altaf",
    description: "Just a simple software engineer portfolio"
  },
  keywords: "nextjs, laravel, software engineer, malaysia"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Hello world</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
      </Head>
      <body className=
        {cn(
          "min-h-screen flex flex-col text-justify bg-background font-sans",
          font.variable
        )}>
        {/* <main className='py-12 px-8 md:px-12 xl:px-24 flex-1 overflow-y-auto relative'> */}
        <main className='py-12 px-8 md:px-12 xl:px-24 flex-1 overflow-y-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
