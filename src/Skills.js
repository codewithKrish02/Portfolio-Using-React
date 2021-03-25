import React from 'react'
import './Skill.css'

function Skills() {
    return (
        <div className='mainclass'>
            <div className='row'>
            <div className='col'>
                <div className="skills portfolio-info-card container">
                        <h2>Skills</h2>
                        <h3>HTML</h3>
                        <div className="progress">
                            <div className="progress-bar" id='p1' aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">100%</span></div>
                        </div>
                        <h3>Bootstrap</h3>
                        <div className="progress">
                            <div className="progress-bar" id='p2' aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">90%</span></div>
                        </div>
                        <h3>JavaScript</h3>
                        <div className="progress">
                            <div className="progress-bar" id='p3' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">80%</span></div>
                        </div>
                        <h3>Python</h3>
                        <div className="progress">
                            <div className="progress-bar" id='p4' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">80%</span></div>
                        </div>
                        <h3>Django</h3>
                        <div className="progress">
                            <div className="progress-bar" id='p5' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">80%</span></div>
                        </div>
                        <h3>Java</h3>
                        <div className="progress">
                            <div className="progress-bar" id='p6' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">80%</span></div>
                        </div>
                        <h3>React</h3>
                        <div className="progress">
                            <div className="progress-bar" id='p7' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="sr-only">80%</span></div>
                        </div>
                    </div>
            </div>
            
        </div>
        </div>
    )
}

export default Skills
