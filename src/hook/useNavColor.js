import React from 'react'

//img
import logo from '../assets/img/logo.png' 
import logo2 from '../assets/img/logo2.png' 

export const useNavColor = ()=>{ 
    const [index, setIndex] = React.useState(null)
    const [color, setColor] = React.useState(null)

    React.useEffect(() => {
 
        const link = document.querySelectorAll('.link'),
              headerLogo = document.querySelector('.Logo img'),
              root = document.querySelector('header');

        if(index != null){ 

            for(var f=0; f<6 ; f++){
                link[f].classList.remove('nav-active'+f)
                if(color === 'black'){
                    link[f].style = " color : #000"
                     if(f === index){
                         link[f].style = "color : #7a7a7a"
                     }
                }else if(color === 'white'){
                    link[f].style = " color : #fff"
                }
            }

            switch (color) {
                case 'black': 
                    headerLogo.src = logo2;
                    root.style = "background-color:  #fff";
                break;
                
                case 'white':
                    headerLogo.src = logo; 
                    root.style = "background-color: none ";
                break;
        
                default:
                break;
            }

            //add active class
            var active = 'nav-active' + index
            link[index].classList.add(active) 

        }
 
    }, [index,color])

    const changeColor = (index,color)=>{
        setIndex(index)
        setColor(color)  
    }
 
    return  [ changeColor ]
}
