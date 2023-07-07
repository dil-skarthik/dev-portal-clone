// import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroComp from './components/HeroComp'
import Main_c from './components/apicomp/Main_c'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <HeroComp/>
        <Main_c/>
        <Footer/>
      </div>
    </>
  )
}

export default App
