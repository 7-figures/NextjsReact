import awaitSleep from 'await-sleep'
import React from 'react'
import Link from 'next/link'

function Home (props) {
  return (
    <div className='main'>
        <h1 className='body'>Welcome!</h1>
        <p> lorem</p>
        <Link href='./about' > visit the about page</Link>
        <p>The weather: {props.forecast}</p>
    </div>
  )
}

export default Home 
export async function getServerSideProps() {
  const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
  const data = await response.json()
await awaitSleep(3000)
  return {
    props: {
      forecast: data.properties.periods[0].detailedForecast
    }
  }
}