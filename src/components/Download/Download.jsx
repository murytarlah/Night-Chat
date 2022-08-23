import React from 'react'
import styles from './Download.module.css'

const Download = () => {
  return (
    <div className={styles.Download}>
      <div className={styles.content}>
        <h1>Try <br /><span>Night chat</span><br /> for free</h1>
        <p>After 30-days trial of our product, enjoy a free and updated version of Night chat.</p>
        <p>For more informations and guide tips click <span>here.</span></p>
      </div>
      <div className={styles.Download__image}>
        <img src={process.env.PUBLIC_URL + '/assets/try night chat for free visual.png'} alt="" />
      </div>
    </div>
  )
}

export default Download