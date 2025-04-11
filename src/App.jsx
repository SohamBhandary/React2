import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Features from './Components/Features'
import Story from './Components/Story'


const App = () => {
  return (
    
     
    <main className="relative min-h-screen w-screen overflow-x-hidden overflow-y-scroll scrollbar-hide ">

     <NavBar/>
      <Hero/>
       <About/>
       <Features/>
       <Story/>
     </main>
   
      
   
  )
}

export default App
