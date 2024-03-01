import React from 'react'
import './home.css'

function Home() {
    return (
        <div className='home'>

            <div className="home-h">
                Personal Portfolio
            </div>
            <div className="home-img">
                <img src="/images/home-img.jpg" alt="" className="img" />
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

export default Home
