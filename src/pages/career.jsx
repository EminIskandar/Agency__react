import React from 'react'

//component
import {  CareerHeader, CareerSelect, CareerSubscribe, CareerVacancy } from 'components'

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
            <CareerHeader/>
            <CareerSelect/>
            <CareerVacancy/>
            <CareerSubscribe/>
        </main>
    )
}
