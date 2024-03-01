import React, { useState } from 'react'
import ProData from './ProData'
import Card from './Card'
import Types from './Types'
import './project.css'

function Project() {
    let [data,setData]=useState(ProData)
  
        const filterFunc = (p) => {
            const selectData = ProData.filter((currentItem) => {
              return currentItem.det === p;
            })
            setData(selectData)
    }
     const all=()=>{
        setData(ProData)
     }
  return (
    <div className='project'>
        <div className="heading">
            My Projects
        </div>
        <div className="types">
            <Types  filterFunc={filterFunc} all={all}/>
        </div>
      <div className="pro-cards">
        {
            data.map((i)=>{
                return <Card 
                key={i.id}
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
