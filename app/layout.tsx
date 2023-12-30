import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import PageTransitionProvider from './providers/PageTransitionProvider'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='antialiased no-scrollbar'>
      <body className={roboto.className}>
        <Header />
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  )
}
