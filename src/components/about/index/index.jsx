//component
import {AboutKnow, AboutMembers, Achievements } from 'components'

export default function About() {

    document.title = 'FinAd | About'


    return ( 
         <main>
             <AboutKnow/>
             <Achievements/>
             <AboutMembers/>
         </main>
    )
}
