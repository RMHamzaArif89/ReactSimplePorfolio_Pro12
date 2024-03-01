import React from 'react'

function Card({img,card_h,card_h2,link}) {
  return (
 
      <div className="pro-card">
            <img src={img} alt=""className='pro-img' />
            <div className="pro-h">{card_h}</div>
            <div className="pro-h2">{card_h2}</div>
            <div className="pro-btn">
            <a href="">link</a>
            </div>
          
        </div>
   
  )
}

export default Card
