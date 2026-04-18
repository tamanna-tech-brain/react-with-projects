import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>sehriyans</h1>
      <button className={styles.button}>Login</button>
    </div>
  )
}

export default Header
