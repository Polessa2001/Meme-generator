import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import DownloadButton from "./components/DownloadButton"
import "./App.css"
function App() {

  return (
    <div>
      <Header />
      <Meme />
      <DownloadButton
      image = "src/components/Trollface.svg" />
    </div>
  )
}

export default App
