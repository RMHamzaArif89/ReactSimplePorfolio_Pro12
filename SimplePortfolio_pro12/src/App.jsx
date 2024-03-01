import { useState } from 'react'
import Nav from './components/nav/nav'
import Home from './components/home/Home'
import Services from './components/services/services'
import Project from './components/projects/Project'
import './App.css'

function App() {
 return(
  <>
  <Nav/>
  <Home/>
  <Services/>
  <Project/>
  </>

 )
}

export default App
