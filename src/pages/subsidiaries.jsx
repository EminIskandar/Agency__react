import React from 'react'

//components
import { SubCompanies, SubHeader } from 'components'

//hook
import  { useNavColor }  from '../hook/useNavColor'

export default function Subsidiaries() {

    document.title = 'FinAd | Subsidiaries'
    
    const [changeColor] = useNavColor()

    React.useEffect(() => {  
         changeColor(2,'black') 
    } ) 
    
    return (
        <main>
            <SubHeader/>
            <SubCompanies/>
        </main>
    )
}
