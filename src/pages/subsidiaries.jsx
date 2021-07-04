import React from 'react'

//components
import Header from './../components/subsidiaries-header'
import Companie from './../components/sub-companies'

//hook
import  { useNavColor }  from './../hook/useNavColor'

export default function Subsidiaries() {

    document.title = 'FinAd | Subsidiaries'
    
    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(2,'black') 
    } ) 
    
    return (
        <main>
            <Header/>
            <Companie/>
        </main>
    )
}
