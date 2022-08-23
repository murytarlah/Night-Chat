import React from 'react'
import styles from './about.module.css'

const Feature = (props) => {
  return (
    <div className={styles.feature}>
      <div className={styles.feature__main}>
				<h3>{props.about}</h3>
				<h1 claclassName={styles.feature__title}>
					{props.title}
				</h1>
				<p className={styles.feature__content}>
					{props.content}
				</p>
			</div>
			<div className={styles.feature__image}>
				<img src={props.image} alt="" />
			</div>
    </div>
  )
}


const About = () => {
  return (
    <div>
			<Feature about={'workflow management'} title={'Automatic Notifications'} content={'Night chat makes you don’t miss out on any information '} image={process.env.PUBLIC_URL + '/assets/Automatic notification visual.png'} />
			<Feature about={'make more connections'} title={'Meet friends across the world'} content={'We give our users the oppurtunity to connect with family and friends across the world and also make new connections.'} image={process.env.PUBLIC_URL + '/assets/web icon.png'} />
			<Feature about={'great features'} title={'Enjoy New features'} content={'We keep updating new features on the app to keep our users engaged.'} image={process.env.PUBLIC_URL + '/assets/pp 1.png'} />
    </div>
  )
}

export default About