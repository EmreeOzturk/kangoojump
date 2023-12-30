import Image, { StaticImageData } from "next/image"
import Gallery from "./components/Gallery"
import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Referances from "./components/Referances"
export default function Home() {

  return (
    <main className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-blue-800">
      <Banner />
      <Cards />
      <Gallery />
      <Referances />
    </main>
  )
}

