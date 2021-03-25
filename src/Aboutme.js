import React from 'react'
import './Aboutme.css'


function Aboutme() {
    return (
        <section className="portfolio-block block-intro">
            <div className="container">
                <div className="avatar">
                    <img id='avatarimage' src='/images/avatar.jpg'/>
                </div>
                <div className="about-me">
                    <p>Hello! I am <strong>Teja Ravipudi</strong>. I work as web developer in frontend and backend.<br/> I have passion for making best websites, minimal and easy to use interfaces.<br/> I love making videos on YouTube. I keep posting new content everyweek.<br/> I love writing scripts, making websites.</p>
                </div>
            </div>
        </section>
    )
}

export default Aboutme  
