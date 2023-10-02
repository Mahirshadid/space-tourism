import React, { useState } from 'react'
import t1 from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import t2 from '../../assets/technology/image-spaceport-portrait.jpg'
import t3 from '../../assets/technology/image-space-capsule-portrait.jpg'
import './tech.css'

const Tech = () => {

    const [selectedPlanet, setSelectedPlanet] = useState('launchvehicle');

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(planet);
    };

    return (
        <div className='tech section__padding'>
        <div className='tech-fixed-contents'>
          <h3><span>03</span>space launch 101</h3>
    
          <div className='tech-links_container'>
            <p>
              <a
                href='#launchvehicle'
                onClick={() => handlePlanetClick('launchvehicle')}
                className={selectedPlanet === 'launchvehicle' ? 'active' : ''}
              >
                1
              </a>
            </p>
            <p>
              <a
                href='#spaceport'
                onClick={() => handlePlanetClick('spaceport')}
                className={selectedPlanet === 'spaceport' ? 'active' : ''}
              >
                2
              </a>
            </p>
            <p>
              <a
                href='#spacecapsule'
                onClick={() => handlePlanetClick('spacecapsule')}
                className={selectedPlanet === 'spacecapsule' ? 'active' : ''}
              >
                3
              </a>
            </p>
          </div>
        </div>
    
            <div className='tech-abs-contents'>
    
                <div className={`tech-launchvehicle ${selectedPlanet === 'launchvehicle' ? 'active' : ''}`} id='launchvehicle'>

                  <div className='texttech'>
                    <p>THE TERMINOLOGY...</p>
                    <h1>launch vehicle</h1>
                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                    <img src={t1} alt='' />
                  </div>
    
                </div>
    
                <div className={`tech-spaceport ${selectedPlanet === 'spaceport' ? 'active' : ''}`} id='spaceport'>
    
                  <div className='texttech'>
                    <p>THE TERMINOLOGY...</p>
                    <h1>spaceport</h1>
                    <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.</p>
                  </div>
                  <img src={t2} alt='' />
    
                </div>
    
                <div className={`tech-spacecapsule ${selectedPlanet === 'spacecapsule' ? 'active' : ''}`} id='spacecapsule'>

                  <div className='texttech'>
                    <p>THE TERMINOLOGY...</p> 
                    <h1>space capsule</h1>
                    <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                  </div>
                  <img src={t3} alt='' />
    
                </div>
    
            </div>
    )
}

export default Tech