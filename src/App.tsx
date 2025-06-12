// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import './fonts.css'
import About from './components/About'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <hr/>
      {/* раздел ниже станет отдельным компонентом впоследствии */}
      <div id='product-section'>
        <h2>Товары</h2>
        <div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>        
      </div>
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
