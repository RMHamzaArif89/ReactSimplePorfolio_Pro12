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
            {/* <ul>
                <li>
                <Link to='/home'>About</Link>
              </li>
              <li>
                <Link to='/home'>Services</Link>
              </li>
              <li>
                <Link to='/home'>Projects</Link>
              </li>
              <li>
                <Link to='/home'>Clients</Link>
              </li>
            </ul> */}
        </div>

        <div className="mode">
            <i className=''>mode</i>
        </div>
      
    </div>
  )
}

export default Nav
