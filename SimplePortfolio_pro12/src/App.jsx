import { useState } from 'react'
import Nav from './components/nav/nav'
import Home from './components/home/Home'
import Services from './components/services/services'
import Project from './components/projects/Project'
import About from './components/about/About'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <>

            <BrowserRouter>
                <Nav />
                <Routes>
                
                        <Route index element={<Home />} />
                        <Route path="services" element={<Services />} />
                        <Route path="project" element={<Project />} />
                        <Route path="About" element={<About />} />
                    

                </Routes>
            </BrowserRouter>

        </>

    )
}

export default App
