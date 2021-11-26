import React from 'react'

//hook
import  { useNavColor }  from './../hook/useNavColor'

import {ErrorIndex} from 'components'

export default function Error() {

    document.title = "finAd | Page not found"

    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(5,'black') 
    } ) 

    return (
        <main>
            <ErrorIndex />
        </main>
    )
}
