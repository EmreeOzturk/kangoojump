import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import PageTransitionProvider from './providers/PageTransitionProvider'
import Footer from './components/footer/Footer'
import WhatsappButton from './components/WhatsappButton'
import Script from 'next/script'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Aqua Active',
  description: "Aqua Active olarak sunduğumuz Aqua Fitness aktiviteleri, uzman profesyoneller ve lisanslı eğitmenlerimiz tarafından yönetilmektedir.Bu etkileyici aktiviteler, suyun direncini kullanarak sağlıklı yaşamı desteklemeyi amaçlar.Aynı özeni, hijyen ve güvenlik standartlarına da taşıyoruz."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='antialiased no-scrollbar'>
      <body className={`bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-blue-800 ${roboto.className}`}>
        <Header />
        {/* <PageTransitionProvider> */}
        {children}
        {/* </PageTransitionProvider> */}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  )
}
