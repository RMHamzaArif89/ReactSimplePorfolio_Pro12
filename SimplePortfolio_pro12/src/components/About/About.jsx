import React, { useState } from 'react'
import './about.css'
import DetCard from './DetCard'
import { AboData } from './aboData'




function About() {
  let [data, setData] = useState(AboData)
  return (
    <div className='about'>
      <div className="about-heading">
        Work Detail
      </div>
      <div className="about-heading">
        Always tried my best to perform
      </div>
      <div className="about-con">
        <img src="/images/about-img2.jpg" alt="" />
        <div className="details">
          {
            data.map((i) => {
              return <DetCard det_h1={i.det_h1} det_h2={i.det_h2} det_text={i.det_text} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About
