import Image, { StaticImageData } from "next/image"
import Gallery from "./components/Gallery"
import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Referances from "./components/Referances"
export default function Home() {

  return (
    <main>
      <Banner />
      <Cards />
      <Gallery />
      <Referances />
    </main>
  )
}

