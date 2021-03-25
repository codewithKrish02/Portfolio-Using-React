import React from 'react'
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Video from './Video'
import Specialskills from './Specialskills';
import Footer from './Footer';
import Laptop from './Laptop';
import Skills from './Skills';


function Indexpage() {
    return (
        <div>
            <Navbar/>
            <div>
                <Aboutme />
                <Video />
                <Specialskills/>
            </div>
            <Laptop/>
            <Skills/>
            <Footer/>
        </div>
    )
}

export default Indexpage
