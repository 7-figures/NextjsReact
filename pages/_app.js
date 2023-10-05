import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar'
import './styles/global.css'

function App({Component, pageProps}) {
  return (
    <div>
        <Navbar/>
        <Component {...pageProps}/>
        <p>Footer</p>
    </div>
  )
}

export default App