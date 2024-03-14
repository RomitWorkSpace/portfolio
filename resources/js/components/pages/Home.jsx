import React from 'react'

import bg from 'imgPath/bg-strip.png'
import DesktopSlider from '../HomeComponents/DesktopSlider'
import AboutSection from '../HomeComponents/AboutSection'
import RoadMap from '../HomeComponents/RoadMap'

function Home() {
    return (
        <>
        <DesktopSlider />
        <div>
            <img src={bg} width="100%" />
        </div>
        <AboutSection />
        <RoadMap />
        <div style={{height:'800px'}}></div>
        </>
    )
}

export default Home
