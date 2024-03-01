import { useState } from 'react'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Services from './components/services/services'
import Project from './components/projects/Project'
import './App.css'

function App() {
 return(
  <>
  <Nav/>
  <About/>
  <Services/>
  <Project/>
  </>

 )
}

export default App
