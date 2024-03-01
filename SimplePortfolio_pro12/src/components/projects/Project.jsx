import React, { useState } from 'react'
import ProData from './ProData'
import Card from './Card'
import './project.css'

function Project() {
    let [data,setData]=useState(ProData)
  return (
    <div className='project'>
        <div className="heading">
            My Projects
        </div>
      <div className="pro-cards">
        {
            data.map((i)=>{
                return <Card 
                img={i.img}
                card_h={i.card_h}
                card_h2={i.card_h2}
                link={i.link}
                />
            })
        }
      </div>
    </div>
  )
}

export default Project
