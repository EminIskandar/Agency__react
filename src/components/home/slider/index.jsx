import React from 'react'
import './css/style.css'


//img
import gears from 'img/icon/settings-gears.png'
import rectangle1 from 'img/Rectangle1.jpg'
import rectangle2 from 'img/Rectangle2.jpg'


export default function Slider() {

    const root = React.useRef(0)
    const [count, setCount] = React.useState(0)  

    React.useEffect(() => {
 
      const ourService = root.current.querySelectorAll('.Our-service'),
            areas = root.current.querySelectorAll('.Areas'),
            areasItem = root.current.querySelectorAll('.Areas li') 

        ourService[0].classList.add('toUp');
        areas[0].classList.add('toUp2');
        areasItem[0].classList.add('list');
        areasItem[2].classList.add('list');

        let interval = setInterval(() => { 

            setCount( c=> c+1 )   

        },10000) 


        return () => {
            clearInterval(interval)
        }


    }, [])

    React.useEffect(()=>{
        const ourService = root.current.querySelectorAll('.Our-service'),
                areas = root.current.querySelectorAll('.Areas'),
                areasItem = root.current.querySelectorAll('.Areas li'),
                sliderItem = root.current.querySelectorAll('#sliderItem'),
                videoImage = root.current.querySelector('.Video__img'),
                videoMenu = root.current.querySelector('.Video__menu'),
                VideoMenuItem = root.current.querySelectorAll('.Video__menu li'),
                ourPortfolio= root.current.querySelector('.Portfolio__content'),
                AchievmentsTopItem = root.current.querySelector('.Achievments-top-items'),
                AchievmentsBottomImage = root.current.querySelector('.Achievments-bottom-items img'),
                AchievmentsText = root.current.querySelector('.Achievments__text');

        if( count >= 4){
            setCount(0) 
            for(var s=0;s<4;s++){
                sliderItem[s].style = "";
                sliderItem[s].classList.remove('out')
                if(s === 0){
                    sliderItem[s].style = "transfrom: translateY(0vh)";
                }
            }
        }else{
     
            sliderItem[count].style = `transition: transform 2s cubic-bezier(0.35, 0.35, 0.05, 0.88); transform: translateY(${(-100*count )}vh); position: relative ; z-index: ${count}`;
            //
            if(count === 0){
                setTimeout( ()=> {
                    ourService[1].classList.remove('toUp');
                    areas[1].classList.remove('toUp2');
                    areasItem[3].classList.remove('list');
                    areasItem[5].classList.remove('list');
                },2000)
            }else if(count === 1){
                ourPortfolio.classList.add('toUp');
                videoImage.classList.add('toUp2');
                videoMenu.classList.add('toUp3');
                VideoMenuItem[0].classList.add('list');
                VideoMenuItem[2].classList.add('list');
                sliderItem[0].classList.remove('i-animation')
                sliderItem[0].classList.add('out')
            }else if(count === 2){
                sliderItem[1].classList.add('out')
                AchievmentsTopItem.classList.add('toUp');
                AchievmentsBottomImage.classList.add('toUp2');
                AchievmentsText.classList.add('toUp3');
                ///
                setTimeout( ()=> {
                    ourPortfolio.classList.remove('toUp');
                    videoImage.classList.remove('toUp2');
                    videoMenu.classList.remove('toUp3');
                    VideoMenuItem[0].classList.remove('list');
                    VideoMenuItem[2].classList.remove('list');
                },2000)
            }else if(count === 3){
                sliderItem[2].classList.add('out')
                ourService[1].classList.add('toUp');
                areas[1].classList.add('toUp2');
                areasItem[3].classList.add('list');
                areasItem[5].classList.add('list');
                ///
                setTimeout( ()=> {
                    AchievmentsTopItem.classList.remove('toUp');
                    AchievmentsBottomImage.classList.remove('toUp2');
                    AchievmentsText.classList.remove('toUp3');
                },2000)
            }
        }


    },[count])


    return (
        <section id="Slider" ref={root}>
            <div className="Slider__text">
                <div className="Slider__text_content">
                    <p>GROWING</p>
                    <h2>Businees</h2>
                    <h3>We plan your financial investments</h3 >
                    <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </span>
                </div>
            </div>
            <div className="Slider__item  i-animation" id="sliderItem" > 
                <div className="Slider__content">
                    <div className="Empty"></div>
                    <div className="Slider__our-service-and-areas">
                        <div className="Our-service">
                            <div className="Our-service__img">
                                <img src={gears} alt="os-icon" />
                            </div>
                            <div className="Our-service__text">
                            <h6 >OUR SERVICES</h6>
                            <p>An effective and success driven mindset is one that makes the best use of all your.</p>
                            <a href="/" className="keep-reading"> <span> Keep reading</span> </a>
                            </div>
                        </div>
                        <div className="Areas"> 
                            <div className="Areas__left-item">
                                <h3>AREAS</h3>
                            </div>
                            <div className="Areas__right-item">
                                <ul>
                                    <li>Financial Planning</li>
                                    <li>VC Funding</li>
                                    <li>Investments Planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Slider__img"></div>
            </div>
            <div className="Slider__item " id="sliderItem">
                <div className="Slider__content">
                    <div className="Empty"></div>
                    <div className="Portfolio">
                        <div className="Portfolio__content">
                            <h3>OUR</h3>
                            <p>Portfolio</p>
                            <a href="/" className="keep-reading"> <span> Keep reading</span> </a>
                        </div>
                        <div className="Video___content">
                            <div className="Video__img">
                                <img src={rectangle1} alt="" />
                            </div>
                            <div className="Video__menu">
                                <ul>
                                    <li>Capital Market</li> 
                                    <li>Portfolio Management</li>
                                    <li>Technology Advisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Slider__img"></div>
            </div>
            <div className="Slider__item " id="sliderItem">
                <div className="Slider__content">
                    <div className="Empty"></div>
                    <div className="Achievments">
                        <div className="Achievments-top-items">
                            <h3>Achievements</h3>
                            <div className="Date">
                                <p>2018</p>
                                <p>1979</p>
                            </div>
                            <a href="/" className="keep-reading"> <span> View more</span> </a>
                        </div>
                        <div className="Achievments-bottom-items"> 
                            <img src={rectangle2} alt="" />
                            <div className="Achievments__text">
                                <p>The company of</p>
                                <p>2018</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="Slider__img"></div>
            </div>
            <div className="Slider__item " id="sliderItem" > 
                <div className="Slider__content">
                    <div className="Empty"></div>
                    <div className="Slider__our-service-and-areas">
                        <div className="Our-service">
                            <div className="Our-service__img">
                                <img src={gears} alt="os-icon" />
                            </div>
                            <div className="Our-service__text">
                            <h6>OUR SERVICES</h6>
                            <p>An effective and success driven mindset is one that makes the best use of all your.</p>
                            <a href="/" className="keep-reading"> <span> Keep reading</span> </a>
                            </div>
                        </div>
                        <div className="Areas">
                            <div className="Areas__left-item">
                                <h3>AREAS</h3>
                            </div>
                            <div className="Areas__right-item">
                                <ul>
                                    <li>Financial Planning</li>
                                    <li>VC Funding</li>
                                    <li>Investments Planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Slider__img"></div>
            </div>
        </section>
    )
}
