// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import './fonts.css'
import About from './components/About'
import ProductCard from './components/ProductCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <hr/>
      <div className='product-section'>
        <h2>Товары</h2>
        <div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>        
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h5>Vite + React</h5>
      {/* <div*/}
      <div>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
    </>
  )
}

export default App
