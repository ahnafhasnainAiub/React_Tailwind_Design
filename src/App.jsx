import { useState } from 'react'
import './App.css'
import ClientCount from './components/Clients/ClientCount'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Industry from './components/Industries/Industry'
import Strategy from './components/Strategies/Strategy'
import './index.css'
import Project from './components/Projects/Project'
import Working from './components/Working/Working'
import Expertise from './components/Expertise/Expertise'
import Hover from './components/Hover/Hover'
import ProjectCard from './components/Projects/ProjectCard'
import Slick from './components/Working/Slick'
import Banner from './components/Working/Banner'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Industry/>
      <ClientCount/>
      <Strategy/>
      {/* <Project/> */}
      <ProjectCard/>
      <Working/>
      <Slick/>
      {/* <Banner/> */}
      <Expertise/>
      {/* <Hover/> */}
      <Footer/>

    </>
  )
}

export default App
