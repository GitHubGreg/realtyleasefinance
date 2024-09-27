import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - RELEAF',
    default: 'RELEAF - Realty Lease Finance Corp',
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
