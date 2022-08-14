import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Ads from '../Ads/Ads'
import Features from '../Features/Features'
import Tokenomics from '../Tokenomics/Tokenomics'
import Roadmap from '../Roadmap/Roadmap'
import BackToTopBtn from '../BackToTopBtn/BackToTopBtn'
import Footer from '../Footer/Footer'

function Screen() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Ads title = "BUY URAPtj TOKEN NOW!" />
        <Features />
        <Ads title = "WHY CHOOSE URAPtj TOKEN" text = "We believe the greatest compliment in the world is trust. Trust is a very delicate area and needs to be built over time. Any one act can destroy faith which takes years to build, We got a strong community and great members all in an amazing project let’s do our part and trust the team" />
        <Tokenomics />
        <Roadmap />
        <BackToTopBtn />
        <Footer />
    </div>
  )
}

export default Screen