import React, {useState} from 'react'
import './crewa.css'
import douglasimg from '../../assets/crew/image-douglas-hurley.png'
import markimg from '../../assets/crew/image-mark-shuttleworth.png'
import victorimg from '../../assets/crew/image-victor-glover.png'
import ansariimg from '../../assets/crew/image-anousheh-ansari.png'


const Crewa = () => {

  const [selectedPlanet, setSelectedPlanet] = useState('douglas');

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className='crewa section__padding'>
    <div className='crewa-fixed-contents'>
      <h3><span>02</span>Meet your Crew</h3>

      <div className='crewa-links_container'>
        <p>
          <a
            href='#douglas'
            onClick={() => handlePlanetClick('douglas')}
            className={selectedPlanet === 'douglas' ? 'active' : ''}
          >
            00
          </a>
        </p>
        <p>
          <a
            href='#mark'
            onClick={() => handlePlanetClick('mark')}
            className={selectedPlanet === 'mark' ? 'active' : ''}
          >
            01
          </a>
        </p>
        <p>
          <a
            href='#victor'
            onClick={() => handlePlanetClick('victor')}
            className={selectedPlanet === 'victor' ? 'active' : ''}
          >
            02
          </a>
        </p>
        <p>
          <a
            href='#ansari'
            onClick={() => handlePlanetClick('ansari')}
            className={selectedPlanet === 'ansari' ? 'active' : ''}
          >
            03
          </a>
        </p>
      </div>
    </div>

        <div className='crewa-abs-contents'>

            <div className={`crewa-douglas ${selectedPlanet === 'douglas' ? 'active' : ''}`} id='douglas'>

              <div className='textc'>
                <h2>commandar</h2>
                <h1>Douglas Hurley</h1>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
              </div>

              <img src={douglasimg} alt='' />

            </div>

            <div className={`crewa-mark ${selectedPlanet === 'mark' ? 'active' : ''}`} id='mark'>

              <div className='textc'>
                <h2>Mission Specialist</h2>
                <h1>MARK SHUTTLEWORTH</h1>
                <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
              </div>
              <img src={markimg} alt='' />
            </div>

            <div className={`crewa-victor ${selectedPlanet === 'victor' ? 'active' : ''}`} id='victor'>

              <div className='textc'>
                <h2>PILOT</h2>
                <h1>Victor Glover</h1>
                <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
              </div>
              <img src={victorimg} alt='' />

            </div>

            <div className={`crewa-ansari ${selectedPlanet === 'ansari' ? 'active' : ''}`} id='ansari'>

              <div className='textc'>
                <h2>Flight Engineer</h2>
                <h1>Anousheh Ansari</h1>
                <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
              </div>
              <img src={ansariimg} alt='' />
            </div>

        </div>
    </div>
  )
}

export default Crewa