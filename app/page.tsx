import Image, { StaticImageData } from "next/image"
import Gallery from "./components/Gallery"
import Banner from "./components/Banner"
export default function Home() {

  return (
    <main className="overflow-hidden bg-slate-700 relative">
      <Banner />
      <Gallery />
    </main>
  )
}

