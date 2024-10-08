import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import HeroText from './components/HeroText/HeroText.jsx'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <HeroText />
        
  
    </>
  )
}

export default App
