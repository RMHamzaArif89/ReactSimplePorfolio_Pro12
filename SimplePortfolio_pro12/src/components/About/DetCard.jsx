import React from 'react'

function DetCard({det_h1,det_h2,det_text}) {
  return (
    <div className="det-card">
    <div className="det-h1">{det_h1}</div>
    <div className="det-h2">{det_h2}</div>
    <div className="det-text">{det_text}</div>
  </div>
  
  )
}

export default DetCard
