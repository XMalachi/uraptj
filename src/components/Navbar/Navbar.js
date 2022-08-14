import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../images/uraptjlogo.png'
import { BsListUl } from 'react-icons/bs'


function Navbar() {
    // navbar toggler function
    const [navdisplay, setNavdisplay] = useState(false)

    const navdisplayToggler = (prev) => {
        setNavdisplay(!prev)
    }


    // This function will scroll the window to the features
    const scrollToFeatures = () => {
        window.scrollTo({
        top: 900,
        behavior: 'smooth' // for smoothly scrolling
        });
    };

    // This function will scroll the window to the features
    const scrollToTokenomics = () => {
        window.scrollTo({
        top: 2000,
        behavior: 'smooth' // for smoothly scrolling
    });
    };

    // This function will scroll the window to the features
    const scrollToRoadMap = () => {
        window.scrollTo({
        top: 3900,
        behavior: 'smooth' // for smoothly scrolling
    });
    };

  return (
    <>
        <div className={styles.navbarcontainer}>
            <Link to='/'>
                <div className={styles.logogroup}>
                
                    <p className={styles.logo}><img src={logo} alt='uraptj logo'/></p>
                    <h3 className={styles.logotxt}>URAPtj</h3>
                    
                </div>
            </Link>

            <div className={styles.links}>
                <Link to='/' onClick={scrollToFeatures}>Features</Link>
                <Link to='/' onClick={scrollToTokenomics}>Tokenomics</Link>
                <Link to='/' onClick={scrollToRoadMap}>Roadmap</Link>
                <Link to='/' onClick={scrollToRoadMap}>Whitepaper</Link>
            </div>

           
            <BsListUl className={styles.toggler} onClick={() => navdisplayToggler(navdisplay)} />

    </div>

        {navdisplay && 
        <div className={styles.toggledlinks}>
            <Link to='/' onClick={scrollToFeatures}>Features</Link>
            <Link to='/' onClick={scrollToTokenomics}>Tokenomics</Link>
            <Link to='/' onClick={scrollToRoadMap}>Roadmap</Link>
            <Link to='/' onClick={scrollToRoadMap}>Whitepaper</Link>
        </div>
        }
        

    </>
    
  )
}

export default Navbar