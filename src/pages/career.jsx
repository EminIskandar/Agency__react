import React from 'react'

//component
import Header from './../components/career-header'
import Select from './../components/select-process'
import Vacancy from './../components/vacancy'
import Subscribe from './../components/subscribe'

//hook
import  { useNavColor }  from './../hook/useNavColor'

export default function Career() {

    document.title = "finAd | Career"

    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(3,'black') 
    } )     

    return (
        <main  >
            <Header/>
            <Select/>
            <Vacancy/>
            <Subscribe/>
        </main>
    )
}
