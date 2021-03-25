import React from 'react'
import './Specialskill.css'
import IosStar from 'react-ionicons/lib/IosStar'
import IosBulb from 'react-ionicons/lib/IosBulb'
import IosSettings from 'react-ionicons/lib/IosSettings'

function Specialskills() {
    return (
        <div>
            <section className="portfolio-block skills" style={{borderTop: '0.2px solid lightgrey'}}>
    <div className="container">
        <div className="heading">
            <h2 align='center'>SPECIAL SKILLS</h2>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"><center><i className='icon'><IosStar fontSize="50px" color="#fff"/></i></center></div>
                    <div className="card-body">
                        <h3 className="card-title">Web Design</h3>
                        <p className="card-text">Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"><center><i className='icon'><IosBulb fontSize="50px" color="#fff"/></i></center></div>
                    <div className="card-body">
                        <h3 className="card-title">Interface Design</h3>
                        <p className="card-text">User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"><center><i className="icon"><IosSettings fontSize='50px' color='#fff'/></i></center></div>
                    <div className="card-body">
                        <h3 className="card-title">Django Development</h3>
                        <p className="card-text">Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Specialskills
