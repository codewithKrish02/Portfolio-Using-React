import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
<nav className="navbar navbar-dark navbar-expand-lg fixed-top gradient">
    <div className="container"><a className="navbar-brand" href="#">Teja Ravipudi</a>
        <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" role="presentation"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" target='_blank' href="https://github.com/codewithKrish02?tab=repositories">Projects</a></li>
            </ul>
        </div>
    </div>
</nav>
    )
}

export default Navbar

/* we need npm install bootstrap */
