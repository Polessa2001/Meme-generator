import React from "react"
import './Header.css'

export default function Header() {
  return (
    <header>
      <img src= "src/components/Trollface.svg" className= "header--image"/>
      <h4 className="header--title">Meme Generator</h4>
    </header>
  )
}
