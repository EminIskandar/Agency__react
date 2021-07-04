import React from 'react'
//component
import Header from  './../components/finance-header'
import Information from  './../components/information'
import Partner from  './../components/partner'

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
            <Header/>
            <Information/>
            <Partner/>
        </main>
    )
}
 