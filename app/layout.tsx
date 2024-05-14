import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import WhatsappButton from "./components/WhatsappButton";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Aqua Active",
  description:
    "Aqua Active olarak sunduğumuz Aqua Fitness aktiviteleri, uzman profesyoneller ve lisanslı eğitmenlerimiz tarafından yönetilmektedir.Bu etkileyici aktiviteler, suyun direncini kullanarak sağlıklı yaşamı desteklemeyi amaçlar.Aynı özeni, hijyen ve güvenlik standartlarına da taşıyoruz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased no-scrollbar">
      <body
        className={`bg-cover bg-center bg-sea ${roboto.className}`}
      >
        <Header />
        {/* <PageTransitionProvider> */}
        {children}
        {/* </PageTransitionProvider> */}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
