import React from 'react'

import bg from 'imgPath/bg-strip.png'
import DesktopSlider from '../HomeComponents/DesktopSlider'
import AboutSection from '../HomeComponents/AboutSection'
import RoadMap from '../HomeComponents/RoadMap'
import ProjectSection from '../HomeComponents/ProjectSection'

function Home() {
    return (
        <>
        <DesktopSlider />
        <div>
            <img src={bg} width="100%" />
        </div>
        <AboutSection />
        <RoadMap />
        <ProjectSection />
        </>
    )
}

export default Home
