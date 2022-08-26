import React from 'react'
import styles from './Onboarding.module.css'

const Onboarding = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.left}>
          <img src={ process.env.PUBLIC_URL + '/assets/night fairy 1.svg'} alt="" />
          <p>With Night chat, you can talk all night long with no hassle.</p>
        </div>
        <div className={styles.content}>
          <button>See now it works</button>
          <p>Do<span>more</span>of <br></br> what you do best</p>
          <p>We can’t wait for you to come on board</p>
        </div>
        <div className={styles.right}>
          <img src={ process.env.PUBLIC_URL + '/assets/night fairy 2.svg'} alt="" />
          <p>Connect with friends from the other end of the line with ease.</p>
        </div>
      </div>
    </div>
  )
}

export default Onboarding