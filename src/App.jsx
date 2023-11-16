import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Projects />
        <Skills/>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
