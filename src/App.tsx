import React, { useState } from 'react';

function App() {
  const shortenUrl = (url:String) => {
    const callApi = async() => {

        const resp = await fetch('https://gotiny.cc/api', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "input" : url })
        })

        const setUrl = () => {
          const shortenedURL = data[0].code
          setNewUrl(`gotiny.cc/${shortenedURL}`)
        }

        const setError = () => setNewUrl( `Error: ${data.error.message}`)

        const data = await resp.json()
        data.error ? setError() : setUrl()

    }

    callApi()
  }

  const [url, setUrl] = useState(''),
        [newUrl, setNewUrl] = useState('')

  return (
      <div className="cutyoururl">
        <h1 className="cutyoururl-title"> <span>Cut</span>yourURL </h1>
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
        <footer>
          <p className="cutyoururl-text">
           Developed and Designed by <span className="cutyoururl-text--ascent"> Paolo Ligsay </span>
          </p>
        </footer>
      </div>
  )
}

export default App
