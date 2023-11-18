import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Experience/>
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
