import React from 'react'
import styles from './MajorFeature.module.css'

const MajorFeature = () => {
  return (
    <div className={styles.majorFeature}>
      <div className={styles.top}>
        <p>Connection hassles and interruptions gone! Your day is cleared for more accomplishment.</p>
      </div>
      <div className={styles.image}>
        <img src={process.env.PUBLIC_URL + '/assets/fifth page visual.png'} alt="" />
      </div>
      <div className={styles.bottom}>
        <p>Chat and talk all night long without any <span>hitches</span> or network <span>hindrances.</span></p>
      </div>
    </div>
  )
}

export default MajorFeature