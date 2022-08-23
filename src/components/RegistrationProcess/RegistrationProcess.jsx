import React from 'react'
import styles from './RegistrationProcess.module.css'
import { CardLight } from '../card/card'

const RegistrationProcess = () => {
  return (
    <div className={styles.processes}>
      <p>..a web of ease.</p>
			<div className={styles.processInfo}>
				<CardLight number={'1'} title={'Create your own cycle'} body={'With Night chat, you decide who has access to you.'} />
				<CardLight number={'2'} title={'Hide/share your profile'} body={'Turn off or on your profile or better still choose those who get to view your profile.'} />
				<CardLight number={'3'} title={'Chat with friends & family'} body={'Night chat, allows you unend free time with family and friends.'} />
				<CardLight number={'4'} title={'Save/Record'} body={'With Night chat, you don’t have to worry about jotting meeting briefs.'} />
			</div>
			<h2>Chat and talk all night long without any <span>hitches</span></h2>
    </div>
  )
}

export default RegistrationProcess