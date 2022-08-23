import React from 'react'
import { CardDark } from '../card/card'
import styles from './Benefit.module.css'

const Benefit = () => {
  return (
    <div className={styles.benefits}>
      <p>..noone’s watching, just the night owl.</p>
      <div className={styles.b_image}>
        <img src={process.env.PUBLIC_URL + '/assets/owl face.png'} alt="" />
      </div>

      <div className={styles.benefitsInfo}>
				<CardDark>
          <h3>We know you love the quiteness of the night, <span>we do too!</span></h3>
          <p>While your’e at it <span>night crawler</span>, Night chat keeps watch over unwanted and unpermitted access to you.</p>
        </CardDark>
        <CardDark>
          <h3>Chat for longer </h3>
          <p>Enjoy long conversations with your folks on our unlimited plan and smooth connection.</p>
        </CardDark>
        <CardDark>
          <h3>Make up for the day</h3>
          <p>The day can be busy , with everyone chasing dreams. Now you could come home and relax to some hot tea and juicy chat line, <span>Enjoy!</span></p>
        </CardDark>
        <CardDark>
          <h3>Do it your way</h3>
          <p>At your time, pace and pleasure. No need worries about missed meeting or calls we have it all saved just for you.</p>
        </CardDark>
			</div>
      <div className={styles.background}>
        <div className={styles.left}>  
          <div>
            <img src={process.env.PUBLIC_URL + '/assets/Polygon 1.svg'} alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <img src={process.env.PUBLIC_URL + '/assets/Ellipse 7.svg'} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/assets/Ellipse 10.svg'} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/assets/Ellipse 9.svg'} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/assets/Polygon 2.svg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit