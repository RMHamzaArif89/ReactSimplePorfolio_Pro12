import React, { useState } from 'react'
import './services.css'
import Data from './SerData'
import SerCard from './SerCard'


function Services() {
    let [data,setData]=useState(Data)
  return (
    <div className='services'>
        <div className="services-heading">
        These  Services Provide to you with passion , struggle and determination...
        </div>
       <div className="services-cards">
       {
            data.map((i)=>{
                return <SerCard img={i.img} card_h={i.card_h} card_h2={i.card_h2} text={i.text} />
            })
        }
       </div>
      
    </div>
  )
}

export default Services
