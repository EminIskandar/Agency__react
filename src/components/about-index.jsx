import React from 'react'

//component
import Know from '../components/know'
import Achievements from '../components/achievements'  
import Members from '../components/members'  

export default function About() {

    document.title = 'FinAd | About'


    return ( 
         <main>
             <Know/>
             <Achievements/>
             <Members/>
         </main>
    )
}
