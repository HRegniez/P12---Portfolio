import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Background from './components/Background'
import './styles/components/background.sass'

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <main>
          <Background/>
          <Hero/>
          <Projects />
          <Experience/>
          
        </main>
        <Footer />        
      </div>
    </>
  )
}

export default App
