import React, {useState} from 'react'
import './desta.css'
import moonimg from '../../assets/destination/image-moon.png'
import marsimg from '../../assets/destination/image-mars.png'
import europaimg from '../../assets/destination/image-europa.png'
import titanimg from '../../assets/destination/image-titan.png'


const Desta = () => {

  const [selectedPlanet, setSelectedPlanet] = useState('moon');

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className='desta section__padding'>
    <div className='desta-fixed-contents'>
      <h3><span>01</span>Pick your Destination</h3>

      <div className='desta-links_container'>
        <p>
          <a
            href='#moon'
            onClick={() => handlePlanetClick('moon')}
            className={selectedPlanet === 'moon' ? 'active' : ''}
          >
            Moon
          </a>
        </p>
        <p>
          <a
            href='#mars'
            onClick={() => handlePlanetClick('mars')}
            className={selectedPlanet === 'mars' ? 'active' : ''}
          >
            Mars
          </a>
        </p>
        <p>
          <a
            href='#europa'
            onClick={() => handlePlanetClick('europa')}
            className={selectedPlanet === 'europa' ? 'active' : ''}
          >
            Europa
          </a>
        </p>
        <p>
          <a
            href='#titan'
            onClick={() => handlePlanetClick('titan')}
            className={selectedPlanet === 'titan' ? 'active' : ''}
          >
            Titan
          </a>
        </p>
      </div>
    </div>

        <div className='desta-abs-contents'>

            <div className={`desta-moon ${selectedPlanet === 'moon' ? 'active' : ''}`} id='moon'>

              <img src={moonimg} alt='' />

              <div className='text'>
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

            <div className={`desta-mars ${selectedPlanet === 'mars' ? 'active' : ''}`} id='mars'>

              <img src={marsimg} alt='' />

              <div className='text'>
                <h1>mars</h1>
                <p>Don't forget to pack your hiking boots.
                 You'll need them to tackle Olympus Mons, 
                 the tallest planetary mountain in our solar system. 
                 It's two and a half times the size of Everest!</p>
                <div className='text-line'></div>
                <div className='info'>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h4>225 MIL. km</h4>
                  </div>
                  <div>
                    <p>Est. travel time</p>
                    <h4>9 months</h4>
                  </div>
                </div>
              </div>

            </div>

            <div className={`desta-europa ${selectedPlanet === 'europa' ? 'active' : ''}`} id='europa'>

              <img src={europaimg} alt='' />

              <div className='text'>
                <h1>europa</h1>
                <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, 
                it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                <div className='text-line'></div>
                <div className='info'>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h4>628 MIL. km</h4>
                  </div>
                  <div>
                    <p>Est. travel time</p>
                    <h4>3 years</h4>
                  </div>
                </div>
              </div>

            </div>

            <div className={`desta-titan ${selectedPlanet === 'titan' ? 'active' : ''}`} id='titan'>

              <img src={titanimg} alt='' />

              <div className='text'>
                <h1>titan</h1>
                <p>The only moon known to have a dense atmosphere other than Earth, 
                Titan is a home away from home (just a few hundred degrees colder!). 
                As a bonus, you get striking views of the Rings of Saturn.</p>
                <div className='text-line'></div>
                <div className='info'>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h4>1.6 BIL. km</h4>
                  </div>
                  <div>
                    <p>Est. travel time</p>
                    <h4>7 years</h4>
                  </div>
                </div>
              </div>

            </div>

        </div>
    </div>
  )
}

export default Desta