import React from 'react'
import './types.css'


function Types({filterFunc,all}) {
 

  return (
  <>
    <li onClick={() => { filterFunc('frontend') }}>FrontEnd</li>
    <li onClick={() => { filterFunc('js') }}>JavaScript</li>
    <li onClick={() => { filterFunc('react') }}>ReactJS</li>
    <li onClick={() => { filterFunc('backend') }}>Backend</li>
    <li onClick={() => {all()}}>All</li>
</>


  )
}

export default Types