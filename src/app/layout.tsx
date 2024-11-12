import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - RELEAF',
    default: 'RELEAF - Realty Lease Finance Corp',
  },
  icons: {
    icon: '/favicon.ico',
    // If you have different sizes, you can add them like this:
    // apple: '/apple-icon.png',
    // shortcut: '/shortcut-icon.png',
  },
  description:
    'Upfront capital to fund leasing costs, providing certainty of timely funding to tenants and brokers.',
  openGraph: {
    images: [
      {
        url: '/social-share-logo.png',
        width: 1200,
        height: 630,
        alt: 'RELEAF - Realty Lease Finance Corp',
      },
    ],
    description:
      'Upfront capital to fund leasing costs, providing certainty of timely funding to tenants and brokers.',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/social-share-logo.png'],
    description:
      'Upfront capital to fund leasing costs, providing certainty of timely funding to tenants and brokers.',
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
