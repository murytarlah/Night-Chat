import React from 'react'
import styles from './Testimonial.module.css'

const Testimonial = () => {
  return (
    <div className={styles.Testimonials}>
      <div className={styles.image}>
        <img src={process.env.PUBLIC_URL + '/assets/Rectangle 54.png'} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.testimonial}>
          <h4>bitly</h4>
          <q>Not only do the SDRs come in with a whole calendar of prospects to speak with,they have more prospects show up to their meetings.</q>
          <p>Cassie Neol</p>
        </div>
        <button> 
          Check out how to use Night chat
          <span>
            <svg width="12" height="11" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.12316 0.888733C3.9279 0.69342 3.61131 0.69342 3.41605 0.888733C3.22079 1.08398 3.22079 1.40057 3.41605 1.59583L4.08196 2.26172H0.65625C0.380112 2.26172 0.15625 2.4856 0.15625 2.76172C0.15625 3.03784 0.380112 3.26172 0.65625 3.26172H3.94539L3.43934 3.76776C3.24408 3.96307 3.24408 4.2796 3.43934 4.47491C3.6346 4.67017 3.95118 4.67017 4.14645 4.47491L5.56066 3.06067C5.71971 2.90161 5.74925 2.66217 5.64919 2.47327C5.62479 2.41119 5.58752 2.35309 5.53738 2.30292L4.12316 0.888733Z" fill="white"/>
            </svg>  
          </span> 
        </button>
        <p>Tips and guides on how to enjoy all that the app has to offer.</p>
      </div>
      <div className={styles.bg}>
        <img src={process.env.PUBLIC_URL + '/assets/bg.svg'} alt="" />
      </div>
    </div>
  )
}

export default Testimonial