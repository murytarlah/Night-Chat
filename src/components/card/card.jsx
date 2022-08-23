import React from 'react'
import styles from './card.module.css'

export const CardLight = (props) => {
  return (
    <div className={styles.cardlight}>
      <div className={styles.card__number}>
        {props.number}
      </div>
      <div className={styles.card__title}>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.card__body}>
        <p>
          {props.body}
        </p>
      </div>
    </div>
  )
}



export const CardDark = (props) => {
  return (
    <div className={styles.carddark}>
      {props.children}
    </div>
  )
}
