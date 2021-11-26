import React from 'react'

//compnent
import {HomeAbout, Achievements, HomeBlog, HomeSlider, HomeTestimonial, Partner } from 'components'

//hook
import  { useNavColor }  from './../hook/useNavColor'



export default function Home() {

    document.title = 'FinAd | Home'

    
    const [changeColor] = useNavColor()

    React.useEffect(() => { 
        changeColor(0,'white')  
    } ) 

    return (
        <main>
            <HomeSlider/>
            <HomeAbout/>
            <HomeBlog/>
            <Achievements/>
            <HomeTestimonial/>
            <Partner/>
        </main>
    )
}
