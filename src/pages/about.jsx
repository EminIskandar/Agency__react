import React from 'react'
import {  Route,useRouteMatch,useParams} from 'react-router-dom'; 

//img
import sign from './../assets/img/SIGN.png'

//page 
import Index from './../components/about-index';  

//hook
import  { useNavColor }  from './../hook/useNavColor'


export default function Product() {

    let match  = useRouteMatch(); 

    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(1,'black') 
    } ) 

    return (
        <>    
            <Route exact  path={match.path}>
                <Index/>
            </Route> 
            <Route path={`${match.path}/:member`}>
               <Member/>
            </Route>   
        </>
    ) 
} 

function Member(){ 
    let { member } = useParams(); 
     
    const members = [
                        { name: 'Lou Gerstner', profession : 'General chairman' , img : 'Group_members1.jpg' ,path: 'LouGerstner' },
                        { name: 'Windlay Jonnhson', profession : 'Boxing Coach' , img : 'Group_members2.jpg' , path: 'WindlayJonnhson' },
                        { name: 'Susan Berk', profession : 'Running Coach' , img : 'Group_members3.jpg' , path: 'SusanBerk' },
                        { name: 'Adam Winberg', profession : 'Personal Trainer' , img : 'Group_members4.jpg' ,path: 'AdamWinberg' }
                    ] 
    return (
         <>
          <main>
               {
                   members.map((info,i)=>{
                        if(info.path === member){
                            const img = require( `./../assets/img/${info.img}`)
                            return  <section className="Personal__content" key={i}> 
                                        <div className="Personal__info" >
                                            <div className="Personal__info-content">
                                                <h6>{info.name}</h6>
                                                <h2>If You Are Serious About Achieving Success In Any Area</h2>
                                                <p className="first">A mindset is a set of assumptions, methods, or notations that is so established that it creates a powerful incentive within you to continue to adopt or accept prior behaviours, choices, or tools. It’s so powerful that it affects every decision making processes.</p>
                                                <p className="second"> There is an effective and success driven mindset is one that makes the best use of all your available resources-your time, energy, opportunities, etc.
                                                </p>
                                                <h4>THE COACH {info.name}</h4>
                                                <img src={sign} alt="" />
                                            </div>
                                        </div>
                                        <div className="Personal__image">
                                            <img src={img.default}  alt="" />
                                        </div>
                                    </section> 
                        }else{
                            return null
                        }
                   })
               } 
          </main>
         </>
      );
}
 