import React from 'react'

//compnent
import Slider from '../components/slider'
import AboutUs from '../components/about-us'
import OurBlog from '../components/our-blog'
import Achievements from '../components/achievements'
import Testimonial from '../components/testimonial'
import Partner from '../components/partner'

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
            <Slider/>
            <AboutUs/>
            <OurBlog/>
            <Achievements/>
            <Testimonial/>
            <Partner/>
        </main>
    )
}
