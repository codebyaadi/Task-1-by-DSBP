import "./App.scss"
import Contact from "./components/contact/contact"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"
import Parallax from "./components/parallax/parallax"
import Portfolio from "./components/portfolio/portfolio"
import Services from "./components/services/services"

function App() {

  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Parallax />
      </section>
      <Portfolio />
      <section>
        <Contact />
      </section>
    </div>
  )
}

export default App
