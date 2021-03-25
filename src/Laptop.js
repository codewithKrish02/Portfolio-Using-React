import React from 'react'
import './Laptop.css'

function Laptop() {
    return (
        <div>
            <section className="portfolio-block website gradient">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-12 col-lg-5 offset-lg-1 text">
                <h3 id='websiteproject'>Website Project</h3>
                <p id='paragraph'>This is a Django based Hospial Management System, which helps the organisation to work simple. This allows the patient
                     to login to his account and book his appointment, and the doctor can see the appointments and add the prescription at 
                     the time of treatment and even the patient can also view the prescription.</p>
            </div>
            <div className="col-md-12 col-lg-5">
                <div className="portfolio-laptop-mockup">
                    <div className="screen">
                        <div className="screen-content">
                            <img id='laptopinside' src='/images/hospital.png'/>
                        </div>
                    </div>
                    <div className="keyboard"></div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Laptop
/**/