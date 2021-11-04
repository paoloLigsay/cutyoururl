import React, { useState } from 'react'
import Footer from './components/Footer'
import Content from './components/Content'

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
        <Content setUrl={setUrl} shortenUrl={shortenUrl} url={url} newUrl={newUrl}/>
        <Footer />
      </div>
  )
}

export default App
