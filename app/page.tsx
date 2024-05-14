import Gallery from "./components/Gallery"
import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Referances from "./components/Referances"
export default function Home() {

  return (
    <main className="bg-indigo-950/50">
      <Banner />
      <Cards />
      <Gallery />
      <Referances />
    </main>
  );
}

