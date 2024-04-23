import About from '@/Component/About/About'
import Header from '@/Component/Header/Header'
import Projects from '@/Component/Projects/Projects'
import Services from '@/Component/Services/Services'
import LogoSlider from '@/Component/Slider/LogoSlider'
import Testimoinal from '@/Component/Testimoinals/Testimoinal'
import TechnologyServices from '@/Component/WhyChoose/ChooseUs'
import React from 'react'


export default function Home() {
    return (
        <div>
            <Header />
            <LogoSlider />
            <About />
            <Services />
            <TechnologyServices />
            <Projects />
            <Testimoinal />
        </div>
    )
} 