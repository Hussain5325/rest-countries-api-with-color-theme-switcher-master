import Body from './Components/Body'
import Navbar from './Components/Navbar'
import { useState } from 'react'

export default function App() {
  const [Dark, setDark] = useState(false)

  if (!Dark) {
    const body = document.body
    body.setAttribute(
      'style',
      'background-color: hsl(0, 0%, 98%);color: hsl(200, 15%, 8%);',
    )
  } else {
    const body = document.body
    body.setAttribute(
      'style',
      'background-color: hsl(207, 26%, 17%);color: hsl(0, 0%, 100%);',
    )
  }

  return (
    <>
      <header>
        <Navbar Dark={Dark} setDark={setDark} />
      </header>
      <main>
        <Body Dark={Dark} />
      </main>
    </>
  )
}
