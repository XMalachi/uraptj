import React, {useState} from 'react'
import styles from './Banner.module.css'
import { BsTelegram, BsTwitter } from "react-icons/bs";
import logo from '../../images/uraptjlogo.png';
import pancakeswaplogo from '../../images/cake.png';


function Banner() {
    const state = ['URAPtj Token', 'Buy URAPtj Token']
    const qualities = ['Be a part of something great', 'Be a part of change', 'Be a part of growth', 'Be a part of the cause', 'Changing the world for good', 'Be a part of uraptj token']
    // const [state, setState] = useState(['URAPtj Token', 'Buy URAPtj Token'])
    // const [qualities, setQualities] = useState(['Be a part of something great', 'Be a part of change', 'Be a part of growth', 'Be a part of the cause', 'Changing the world for good', 'Be a part of uraptj token'])
    const [text, setText] =  useState({count: 0, qualitiesCount: 0})

    // setTimeout()
    setTimeout(()=>{
        slider()
    }, 4000)
    const slider = () => {
        setText({
            count: text.count === state.length-1 ? 0 :text.count +1,
            qualitiesCount: text.qualitiesCount === qualities.length-1 ? 0 : text.qualitiesCount +1,
        })
    }


  return (
    <div className={styles.Banner}>

        <div className={styles.bannertext}>
            <>
            {state.map((item, index) => (
                <div key={index} className={text.count === index ? 'slide active' : 'slide'}>
                {text.count === index && <h1>{item}</h1>}
                </div>
            ))}
            </>
            <p className={styles.BannerTxt}>
                This token was created for use within a narrow community. 
                You could use a certain percentage of your marketing expenses as prize money 
                to run something like a lottery, and eventually create a game site where you can play 
                using UPtJ on your website.
            </p>

            <div  className={styles.qualities}>
                {qualities.length > 0 && qualities.map((quality, index) => (
                    <div key={index} className={text.qualitiesCount === index ? 'slide active' : 'slide'}>
                        {text.qualitiesCount === index && <p>{quality}<span className={styles.theme}>...</span></p>}
                    </div> 
                ))}
            </div>

            <div className={styles.subscribe}>
                <a href='https://twitter.com/uraptj?s=21&t=kBRE2E0-fGItx8CXMP-XzA'
                    target="_blank" rel="noopener noreferrer" 
                    className={styles.telegram}><BsTelegram  />

                    Join Telegram
                </a>
                <a href='https://t.me/Uraptj'
                    target="_blank" rel="noopener noreferrer" 
                    className={styles.telegram}><BsTwitter />

                    Join Telegram
                </a>
                <a href='https://pancakeswap.finance/swap' target="_blank" rel="noopener noreferrer" className={styles.pancakeswap}>
                    <img src={pancakeswaplogo} height='30px' alt='Pancakeswap logo'  className={styles.pancakeswaplogo} />Lauched on Pancake swap
                </a>
                <p className={styles.ca}>Contract Address (Bsc Chain): 0xa464C5EE5fe41bd5C350Ca8f4d6606c1152867bB</p>
            </div>
        </div>

        <div>
            <img src={logo} alt="urap tj logo" className={styles.brandlogo}/>
        </div>
        
    </div>
  )
}

export default Banner