// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import './fonts.css'
import About from './components/About'
import Footer from './components/Footer'
import PrevProductSection from './components/PrevProductSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <hr/>
      <PrevProductSection/>
      <hr/>
      <Footer/>
      {/* раздел ниже будет удалён */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>      
    </>
  )
}

export default App
