// import React from 'react'
import Logo from "../assets/devportal_logo.png"

function Navbar() {
  return (
    <div className="items-start sticky top-0 flex  h-15 shadow-md z-40 bg-white">
      <div className="m-w-7xl">
        <img src={Logo} className="object-scale-down w-44 ml-4 p-4 pt-3.5"/>
      </div>
    </div>
  )
}

export default Navbar
