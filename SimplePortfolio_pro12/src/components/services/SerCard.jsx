import React from 'react'

function SerCard({img,card_h,card_h2,text}) {
  return (
    <div className="card">
    <img src={img} alt="" />
    
<div className="card-det">
<div className="card-h">
     {card_h}
    </div>
    <div className="card-h2">
     {card_h2}
    </div>
    <div className="card-text">
     {text}
    </div>
</div>
</div>
  )
}

export default SerCard
