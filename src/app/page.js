import Hero from "../components/hero/hero"
import Top from "../components/top/top"
import About from "../components/about/about"
import Describe from "../components/describe/describe"
import Reviews from "../components/addClient/addRewies"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Top />
      <About />
      <Describe />
      <Reviews/>
    </div>
  );
}
