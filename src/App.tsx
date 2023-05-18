import React, { useState } from 'react'
import './App.css'
import CardsWrapper from './Cards/CardsWrapper'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import ThemeChanger from './ThemeChanger/ThemeChanger'

function App() {

  const [currentTheme, setCurrentTheme] = useState("https://api.kamodb.de:5000/themes/futuristic.css")

  function themeChange(theme: any){
    setCurrentTheme(theme)
  }
  
  return (
    <div>
      <Navbar />
      <CardsWrapper />
      {document.getElementById("theme")?.setAttribute("href", currentTheme)}
      <ThemeChanger onThemeChange={themeChange}/>
      {/* <Footer /> */}
    </div>
  )
}

export default App
