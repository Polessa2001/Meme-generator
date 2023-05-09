import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./App.css"

function App() {
  async function handleImageDownload() {
    const element = document.getElementById('print'),
    canvas = await html2canvas(element),
    data = canvas.toDataURL('image/jpg'),
    link = document.createElement('a');
    console.log(document.getElementById("print"))
    link.href = data;
    link.download = 'downloaded-image.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <Header />
      <Meme />
      <div className= "d-flex justify-content-center my-2">
        <button type="button" className = "btn my--btn" onClick={handleImageDownload}>Download</button>
      </div>
    </div>
  )
}

export default App
// <a className = "btn btn-default my--btn" href= "#" download = "">Download</a>
