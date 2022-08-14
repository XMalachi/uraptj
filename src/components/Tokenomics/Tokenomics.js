import React from 'react'
import { BuyDoughnutFunc } from './BuyDoughnutChart'
import { SellDoughnutFunc } from './SellDoughnutChart'
import styles from './Tokenomics.module.css'

function Tokenomics() {
  return (
    <div className={styles.tokenomicsContainer}>
        <h2 className={styles.tokenomicsHeader}>TOKENOMICS</h2>
            <h2>BUY TAX</h2>
            <div className={styles.buytax}>
                <div className={styles.buytaxChart} >
                    <BuyDoughnutFunc />
                </div>

                <div className={styles.buytaxDetailGrp}>
                    <div className={styles.buytaxDetail}>
                        
                        <div className={styles.buymarketing}>
                            <p>Marketing: 3%</p>
                        </div>
                        <div className={styles.buyLp}>
                            <p>Lp: 2%</p>
                        </div>
                        <div className={styles.buyreward}>
                            <p>Reward: 5%</p>
                        </div>
                    </div>
                </div>
                
                
            </div>


            <h2>SELL TAX</h2>
            <div className={styles.selltax}>
                
                <div className={styles.selltaxDetailGrp}>
                    <div className={styles.selltaxDetail}>

                    
                        <div className={styles.sellmarketing}>
                            <p>Marketing: 3%</p>
                        </div>

                        <div className={styles.sellLp}>
                            <p>Lp: 2%</p>
                        </div>

                        <div className={styles.sellreward}>
                            <p>Reward: 5%</p>
                        </div>
                    </div>

                </div>
                
                <div className={styles.selltaxChart}>
                    <SellDoughnutFunc />
                </div>

                
            </div>
        
    </div>
  )
}

export default Tokenomics