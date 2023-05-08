import React from 'react'
import "./DownloadButton.css"
export default function DownloadButton(props) {
  return (
    <div className= "d-flex justify-content-center my-2">
      <a className = "my--btn" href= {props.image} download = "Meme.svg">Download</a>
    </div>
  )
}
