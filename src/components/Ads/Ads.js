import React from 'react'
import styles from './Ads.module.css'

function Ads({title, text}) {
  return (
    <div className={styles.ads}>
        <h2 className={styles.adstitle}>{title}</h2>
        <h2 className={styles.adstext}>{text}</h2>
    </div>
  )
}

export default Ads