import React from 'react'
import styles from './Users.module.css'


const Users = () => {
  return (
    <div className={styles.usersSection}>
        <div className={styles.content}>
            <h1>Over <span>20,000,000</span> users worldwide</h1>
            <div className={styles.users}>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + '/assets/brd 1.png'} alt="" />
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + '/assets/brd 2.png'} alt="" />
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + '/assets/brd 3.png'} alt="" />
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + '/assets/brd 4.png'} alt="" />
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + '/assets/Facebook-logo-blue-circle-large-transparent-png 1.png'} alt="" />
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + '/assets/Facebook-logo-blue-circle-large-transparent-png 2.png'} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users