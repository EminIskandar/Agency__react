import React from 'react'

//hook
import  { useNavColor }  from './../hook/useNavColor'

import { ContactIndex } from 'components'

export default function Contact() {

    document.title = "finAd | Contact"

    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(5,'black') 
    } ) 


    return (
        <main id="Contact">
            <ContactIndex/>
        </main>  
    )
}
