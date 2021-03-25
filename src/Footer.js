import React from 'react'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import IosMail from 'react-ionicons/lib/IosMail'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer className="page-footer">
                <div className="container">
                    <div className="social-icons"><a href="#"><i className="icon"><LogoGithub/>Github</i></a><a href="#"><i className="icon"><LogoInstagram/>Instagram</i></a><a href="#"><i className="icon"><LogoTwitter/>Twitter</i></a><a href="#"><i className="icon"><IosMail/>Email</i></a></div>
                    <br/><h6>Copyright<span>&copy;</span> All rights reserverd. Teja Ravipudi</h6>
                </div>
            </footer>
        </div>  
    )
}

export default Footer
