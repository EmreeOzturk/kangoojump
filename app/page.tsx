import Image, { StaticImageData } from "next/image"
import Gallery from "./components/Gallery"
import Banner from "./components/Banner"
import Cards from "./components/Cards"
export default function Home() {

  return (
    <main className="bg-slate-700">
      <Banner />
      <Gallery />
      <Cards />
    </main>
  )
}

