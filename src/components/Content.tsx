import React from 'react'

interface IProp {
  setUrl: React.Dispatch<React.SetStateAction<string>>
  shortenUrl: (url: String) => void
  url: string
  newUrl: string
}

const Content:React.FC<IProp> = ({setUrl, shortenUrl, url, newUrl}) => {
  return(
    <>
      <div className="cutyoururl__input-container">
        <div className="cutyoururl__input-flex-container">
          <input className="cutyoururl-input" type="text" onChange={(e) => setUrl(e.target.value)}/>
          <button className="cutyoururl-button" onClick={() => shortenUrl(url)}> Shorten </button>
        </div>
        <input className="cutyoururl-input cutyoururl-input--result" type="text" value={newUrl}/>
      </div>
      <div className="cutyoururl-text-container">
        <p className="cutyoururl-text cutyoururl-text--24 cutyoururl-text--center">
          <span className="cutyoururl-text--ascent"> cutyoururl </span> is an open-source tool used to shorten your URL
          <br/>
          and remove unnecessary characters on your link using gotiny.cc API
        </p>
      </div>
    </>
  )
}

export default Content 