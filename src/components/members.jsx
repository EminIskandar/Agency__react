import React from 'react'

//img
import members1  from '../assets/img/Group_members1.jpg'
import members2  from '../assets/img/Group_members2.jpg'
import members3  from '../assets/img/Group_members3.jpg'
import members4  from '../assets/img/Group_members4.jpg'

export default function Members() {

     
    const [index, setIndex] = React.useState(0)
    const [type, setType] = React.useState(0)

    React.useEffect(() => {
        window.addEventListener('resize', resize) 
        return () => {
            window.removeEventListener('resize', resize) 
        }
    })

    const nav = (num)=>{  
        const membersItem = document.querySelectorAll('.Members__item'); 
        const navItem = document.querySelectorAll('.nav-dot')
        const width = document.body.offsetWidth  
        console.log(navItem)

        if(width  < 996 ){
            for(var i=0;i<4;i++){
                membersItem[i].style = `transform: translateX(-${100*num}vw);`
                navItem[i].classList.remove('nav-dot--active')
            }
        }else{
            for(var s=0;s<4;s++){
                membersItem[s].style = `transform: translateX(-${ num === 0 ? 0 : 120 }%);`
                navItem[s].classList.remove('nav-dot--active')
            }
        }
        navItem[num].classList.add('nav-dot--active')
        setIndex(0)
    }

    const reset = ()=>{
        const membersItem = document.querySelectorAll('.Members__item');
        const navItem = document.querySelectorAll('.nav-dot')
        if( type === 0){ 
            for(var i=0;i<4;i++){
                 membersItem[i].style = `transform: translateX(-${100* index}vw);`
                 navItem[i].classList.remove('nav-dot--active')
            }
            navItem[ index].classList.add('nav-dot--active')
        }else{ 
            for(var s=0;s<4;s++){
                 membersItem[s].style = `transform: translateX(-${  index === 0 ? 0 : 120 }%);`
                 navItem[s].classList.remove('nav-dot--active')
            }
            navItem[ index].classList.add('nav-dot--active')
        } 
    }
    const resize = ()=>{
        const width = document.body.offsetWidth
        if(width < 996){
            reset()
            setType(1)
        }else{
            reset()
            setType(0)
        }
    }

    return (
        <section id="Members">
        <div className="Members__title">
            <p>BOARD MEMBERS</p>
            <h3>Group structure</h3>
        </div>
        <div className="Members__content"> 
            <div className="Members__items">
                <div className="Members__item" >
                    <div className="Members__social-media">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-linkedin"></i></a>
                    </div>
                <div className="Members__image">
                    <img  src={members1} alt="" />
                </div>
                <div className="Members__info">
                        <a href="/about/LouGerstner">Lou Gerstner</a>
                        <p className="Members__profession">General chairman</p>
                    </div>
                </div>
                <div className="Members__item" >
                    <div className="Members__social-media">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="Members__image">
                        <img  src={members2} alt="" />
                    </div>
                    <div className="Members__info">
                        <a href="/about/WindlayJonnhson">Windlay Jonnhson</a>
                        <p className="Members__profession">Boxing Coach</p>
                    </div>
                </div>
                <div className="Members__item" >
                    <div className="Members__social-media">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="Members__image">
                        <img  src={members3} alt="" />
                    </div>
                    <div className="Members__info">
                        <a href="/about/SusanBerk">Susan Berk</a>
                        <p className="Members__profession">Running Coach</p>
                    </div>
                </div>
                <div className="Members__item" >
                    <div className="Members__social-media">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="Members__image">
                        <img  src={members4} alt="" />
                    </div>
                    <div className="Members__info">
                        <a href="/about/AdamWinberg">Adam Winberg</a>
                        <p className="Members__profession">Personal Trainer</p>
                    </div>
                </div>
            </div>    
        </div>
        <div className="Members__nav">
            <div className="nav-dot nav-dot--active" onClick={nav.bind(this,0)}></div>
            <div className="nav-dot" onClick={nav.bind(this,1)}></div>
            <div className="nav-dot" onClick={nav.bind(this,2)}></div>
            <div className="nav-dot" onClick={nav.bind(this,3)}></div> 
        </div>
    </section>  
    )
}
