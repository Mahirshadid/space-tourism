import React from 'react'
import './desta.css'
import moonimg from '../../assets/destination/image-moon.png'
import marsimg from '../../assets/destination/image-mars.png'
import europaimg from '../../assets/destination/image-europa.png'
import titanimg from '../../assets/destination/image-titan.png'


const Desta = () => {
  return (
    <div className='desta section__padding'>
        <div className='desta-fixed-contents'>
            <h3><span>01</span>Pick your Destination</h3>

            <div className='desta-links_container'>
              <p><a href='#moon'>Moon</a></p>
              <p><a href='#mars'>Mars</a></p>
              <p><a href='#europa'>Europa</a></p>
              <p><a href='#titan'>Titan</a></p>
            </div>
        </div>

        <div className='desta-abs-contents'>

            <div className='desta-moon' id='moon'>

              <img src={moonimg} alt='' />

              <div className='moon-text'>
                <h1>moon</h1>
                <p>See our planet as you've never seen it before. 
                A perfect relaxing trip away to help regain perspective 
                and come back refreshed. While you're there, take in 
                some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className='text-line'></div>
                <div className='info'>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h4>384,400 KM</h4>
                  </div>
                  <div>
                    <p>Est. travel time</p>
                    <h4>3 DAYS</h4>
                  </div>
                </div>
              </div>

            </div>

        </div>
    </div>
  )
}

export default Desta