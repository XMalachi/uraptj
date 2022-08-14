import React from 'react'
import styles from './Roadmap.module.css'
import { BsFillHexagonFill, BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";


function Roadmap() {
  return (
    <div className={styles.roadmap}>
        
        <h2>ROADMAP</h2>


        
        <div className={styles.planningStage}>
        <div className={styles.planningStagedetails}><BsCaretLeftFill /> <BsFillHexagonFill /></div>
                <h2>Planning Stage</h2>
            <ul>
                <li>Build a Consensus Mechanism</li>
                <li>Plan the design of the exchange.</li>
                <li>Integrate APIs</li>
                <li>Form a Marketing Team</li>
                <li>BSC Coin Design</li>
                <li>Tokenomics Design</li>
            </ul>
        </div>



        
        <div className={styles.developmentStage}>
        <div className={styles.developmentStagedetails}><BsFillHexagonFill /> <BsCaretRightFill /></div>
            <h2>Development Stage</h2>
            <ul>
                <li>Build a Consensus Mechanism</li>
                <li>Plan the design of the exchange.</li>
                <li>Integrate APIs</li>
                <li>Form a Marketing Team</li>
                <li>BSC Coin Design</li>
                <li>Tokenomics Design</li>
            </ul>
        </div>



        <hr className={styles.hr} />
        


        
        <div className={styles.partnershipexchangeStage}>
        <div className={styles.partnershipexchangeStagedetails}><BsCaretLeftFill /> <BsFillHexagonFill /></div>
            <h2>Partnership And exchange Stage</h2>
            <ul>
                <li>Build a Consensus Mechanism</li>
                <li>Plan the design of the exchange.</li>
                <li>Integrate APIs</li>
                <li>Form a Marketing Team</li>
                <li>BSC Coin Design</li>
                <li>Tokenomics Design</li>
            </ul>
        </div>



        
        <div className={styles.futureinnovationStage}>
        <div className={styles.futureinnovationStagedetails}><BsFillHexagonFill /> <BsCaretRightFill /></div>
            <h2>Future innovation Stage</h2>
            <ul>
                <li>Build a Consensus Mechanism</li>
                <li>Plan the design of the exchange.</li>
                <li>Integrate APIs</li>
                <li>Form a Marketing Team</li>
                <li>BSC Coin Design</li>
                <li>Tokenomics Design</li>
            </ul>
        </div>



    </div>
  )
}

export default Roadmap