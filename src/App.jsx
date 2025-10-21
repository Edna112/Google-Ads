import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <About />
      <Footer />
    </div>
  )
}

export default App