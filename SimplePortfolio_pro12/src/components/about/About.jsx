import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about'>

            <div className="about-h">
                Personal Portfolio
            </div>
            <div className="about-img">
                <img src="/images/about-img.jpg" alt="" className="img" />
            </div>
            <div className="name">
                Rana Muhammad Hamza
            </div>
            <div className="qual">
                BS CS
            </div>
            <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, officiis! Architecto adipisci sapiente esse? Neque assumenda amet omnis aperiam atque laborum eligendi iusto. Quisquam, magni nisi odio fugit placeat temporibus?
            </div>


            <div className="click">
                {/* ClickIcons */}
                ^
            </div>

        </div>
    )
}

export default About
