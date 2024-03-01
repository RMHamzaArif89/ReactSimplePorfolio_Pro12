import React from 'react'
import './nav.css'

import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <div className="heading">
            <div className="text">RM</div>
            <img src="/images/nav-img.jpg" alt="" />
        </div>
        <div className="ul">
            <ul>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/project'>Projects</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                {/* <Link to='/about'>About</Link> */}
                Client
              </li>
            </ul>
        </div>

        <div className="mode">
            <i className=''>mode</i>
        </div>
      
    </div>
  )
}

export default Nav
