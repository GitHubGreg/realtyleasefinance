import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - RELEAF',
    default: 'RELEAF - Realty Lease Finance Corp',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', sizes: '192x192' },
    ],
  },
  description:
    'Simple lease finance solutions for corporate tenants and landlords.',
  openGraph: {
    images: [
      {
        url: 'https://www.realtyleasefinance.com/social-share-logo.png',
        width: 1200,
        height: 630,
        alt: 'RELEAF - Realty Lease Finance Corp',
      },
    ],
    description:
      'Simple lease finance solutions for corporate tenants and landlords.',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.realtyleasefinance.com/social-share-logo.png'],
    description:
      'Simple lease finance solutions for corporate tenants and landlords.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white text-base antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
