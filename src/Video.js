import React from 'react'
import ReactPlayer from 'react-player'
import './Video.css'

class Video extends React.Component {
    render () {
      return (
        <div className='main'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-12 col-lg-5 offset-lg-1 text'>
                        <h2>Here's one of my video...  <img id='emoji' src='/images/rightfinger.png' style={{borderRadius:0}}/><br/><br/></h2>
                        <p>A Script that automates the process of login <br/>to my social media accounts on a single click. <br/>You have to add the emails and passwords <br/>in the script and select the choice. </p>
                    </div>
                    <div className='col-md-10 col-lg-5'>
                        <div className='player-wrapper'>
                            <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=bmGXX5iUqlc' controls={true}/>
                        </div>
                    </div>
                </div>  
            </div> 
        </div>
      )
    }
  }

  export default Video

  /*
  for adding the video to the page we need the react player package to be installed 
  npm install react-player


  
  */