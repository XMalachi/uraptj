import React from 'react'
import styles from './Footer.module.css'
import { BsTelegram } from "react-icons/bs";


function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerGrp}>
            <p className={styles.rights}>
                Copyright &copy; URAPtj 2022. All rights reserved
            </p>

            <a href='https://twitter.com/uraptj?s=21&t=kBRE2E0-fGItx8CXMP-XzA'
                    target="_blank" rel="noopener noreferrer" 
                    className={styles.telegram}><BsTelegram  />

                    Join Telegram
            </a>
        </div>
    </div>
  )
}

export default Footer