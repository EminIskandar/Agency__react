import React from 'react'
//img
import l_arrow from 'img/icon/left-arrow.png' 
import r_arrow from 'img/icon/right-arrow.png' 
import g_img1 from 'img/gallery/gallery_img_1.jpg' 
import g_img2 from 'img/gallery/gallery_img_2.jpg' 
import g_img3 from 'img/gallery/gallery_img_3.jpg'


const Gallery = () => {

    const [index, setIndex] = React.useState(0)
    const [index2, setIndex2] = React.useState(0)

    const root = React.useRef(null)

    const leftArrow =  ()=>{    
        setIndex(c=> c-1) 
    }

    const rightArrow = ()=>{  
        setIndex(c=> c+1)
    }  

    
    React.useEffect(()=>{ 
        const item = root.current.querySelectorAll('.Galery__item')
        if(index <=0) { 
            setIndex(0)
        }else if(index >=3){
            setIndex(3)
        }

        for(var s=0;s<4;s++){
            item[s].style = `transform: translateX(-${100*index}%);`
        }
 
    },[index])

    React.useEffect(()=>{  
        const item = root.current.querySelectorAll('.Galery__item')
        for(var s=0;s<4;s++){
            item[s].style = `transform: translateX(-${100*index2}%);`
        } 
    },[index2])

    const nav = (i) =>{ 
         setIndex2(i)
    }

    return ( 
            <>
                <div className="Galery__items" ref={root}> 
                    <div className="Galery__nav-arrow" > 
                            <div className="Left_arrow"><img src={l_arrow} alt="" className="arrow" onClick={leftArrow}/></div>
                            <div className="Right_arrow"><img src={r_arrow}  alt="" className="arrow" onClick={rightArrow}/></div>
                    </div> 
                    <div className="Galery__item"> 
                        <img src={ g_img1 } alt=""/> 
                    </div> 
                    <div className="Galery__item"> 
                        <img src={ g_img2 } alt=""/> 
                    </div> 
                    <div className="Galery__item"> 
                        <img src={ g_img3 } alt=""/> 
                    </div> 
                    <div className="Galery__item"> 
                        <img src={ g_img2 } alt="" /> 
                    </div> 
                </div> 
                <div className="Galery__nav"> 
                    <ul> 
                        <li onClick={nav.bind(this,0)}></li> 
                        <li onClick={nav.bind(this,1)}></li> 
                        <li onClick={nav.bind(this,2)}></li>
                        <li onClick={nav.bind(this,3)}></li>
                    </ul>
                </div> 
            </>
    )
}


export default Gallery
