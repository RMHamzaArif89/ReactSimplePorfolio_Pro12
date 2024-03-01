import { useState } from 'react'
import Nav from './components/nav/nav'
import Home from './components/home/Home'
import Services from './components/services/services'
import Project from './components/projects/Project'
import About from './components/about/About'
import './App.css'

function App() {
 return(
  <>
  <Nav/>
  <Home/>
  <Services/>
  <Project/>
  <About/>

  </>

 )
}

export default App
