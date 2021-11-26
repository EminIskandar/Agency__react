import React from 'react'
//component
import { FinanceHeader, FinanceInformation, Partner } from 'components'

//hook
import  { useNavColor }  from './../hook/useNavColor'

export default function Finance() {

    document.title = 'FinAd | Finance'

    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(4,'black') 
    } ) 

    
    return (
        <main>
            <FinanceHeader/>
            <FinanceInformation/>
            <Partner/>
        </main>
    )
}
 