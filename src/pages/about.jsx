import React from 'react'
import {  Route, useRouteMatch } from 'react-router-dom';  

//page 
import { AboutIndex, AboutPersonal }from 'components';  

//hook
import  { useNavColor }  from './../hook/useNavColor' 


export default function Product() {

    let match  = useRouteMatch(); 

    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(1,'black') 
    }) 

    return (
        <>    
            <Route exact  path={match.path}>
                <AboutIndex/>
            </Route> 
            <Route path={`${match.path}/:member`}>
               <AboutPersonal/>
            </Route>    
        </>
    ) 
} 
 