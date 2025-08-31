import './App.css'
import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      setIsLoaded(true);
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  return (
    <div className = {`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar/>

      <Hero/>

      <Projects/>

      <Contact/>

      <>
        <p> &copy; 2025 Aditya All rights reserved.  </p>
      </>


    </div>
  )
}

export default App
