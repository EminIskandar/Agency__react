import React from 'react'

export default function Testimonial() {
 

    const author = [
        { name: 'Roy Steffen', profession : 'Marketing Manager' , img : 'author_1.jpg' },
        { name: 'Robert Caldini', profession : 'Interface Designer' , img : 'author_2.jpg' },
        { name: 'Adam Winberg', profession : 'Developing Officer' , img : 'author_3.jpg' },
        { name: 'Roy Steffen', profession : 'Marketing Manager' , img: 'author_1.jpg' },
        { name: 'Robert Caldini', profession : 'Interface Designer' , img : 'author_2.jpg' },
        { name: 'Adam Winberg', profession : 'Developing Officer' , img : 'author_3.jpg' }
    ]
 


    const carousel = (numb)=>{ 
            const sliderItem  =  document.querySelectorAll('.Testimonial__slider-item'),
                    navItem   =  document.querySelectorAll('.nav-dot'),
                    width     =  document.body.offsetWidth,
                    itemWidth =  document.querySelectorAll('.Testimonial__slider-item')[0].offsetWidth+40 
            if(width > 992){ 
                for(var s=0; s<6; s++){
                    if(numb === 0 ){
                            sliderItem[s].style ="transform: translate(0px,0); transition: all 2s ease ";
                    }else{
                        if( width < 1220){
                            sliderItem[s].style ="transform: translate(-1035px,0); transition: all 2s ease ";
                        }else{
                            sliderItem[s].style ="transform: translate(-1240px,0); transition: all 2s ease ";
                        }
                    } 
                }
                for(var f=0; f<2; f++){
                    navItem[f].classList.remove('nav-dot--active')
                }
                navItem[numb].classList.add('nav-dot--active')
            }else if(width < 992){
                for(var r=0; r<6; r++){
                    if(numb === 0 ){
                            sliderItem[r].style ="transform: translate(0,0); transition: all 2s ease ";
                    }else{
                        sliderItem[r].style =`transform: translate(-${(itemWidth*numb)}px,0); transition: all 2s ease `;
                    } 
                }
                for(var g=0; g<6; g++){
                    navItem[g].classList.remove('nav-dot--active')
                }
                navItem[numb].classList.add('nav-dot--active')
            }
    }


    return (
        <section id="Testimonial">
            <div className="Testimonial__title">
                <p>TESTIMONIALS</p>
                <h3>Feel the vibe of our customers</h3>
            </div>
            <div className="Testimonial__slider">
                <div className="Testimonial__slider-items">
                    {
                        author.map((author, i) => {   
                            const img = require( `./../assets/img/author/${author.img}`) 
                            return <div className="Testimonial__slider-item" key={i}>
                                    <div className="Slider__item-text">
                                        <p>"Value really gets all of our best work in one place for the entire company to see. It has let us concentrate on the real work, and not on the plumbing."</p>
                                    </div>
                                    <div className="Slider__item-author">
                                        <div className="Slider__item-image">
                                            <img src={img.default}  alt="author"/>
                                        </div>
                                        <div className="Slider__item-name-and-profession">
                                            <p>{author.name}</p>
                                            <p>{author.profession}</p>
                                        </div> 
                                    </div>
                                </div>
                        })
                    }
                </div>
            </div>
            <div className="Testimonial__nav">
                <div className="nav-dot nav-dot--active" onClick={carousel.bind(this,0)}></div>
                <div className="nav-dot" onClick={carousel.bind(this,1)}></div>
                <div className="nav-dot" onClick={carousel.bind(this,2)}></div>
                <div className="nav-dot" onClick={carousel.bind(this,3)}></div>
                <div className="nav-dot" onClick={carousel.bind(this,4)}></div>
                <div className="nav-dot" onClick={carousel.bind(this,5)}></div>
            </div>
        </section>
    )
}
