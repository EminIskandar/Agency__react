import React from 'react'
import './css/style.css'

//img 
import img1 from 'img/sub-company-head-img1.png' 
import img2 from 'img/sub-company-head-img2.png' 
import img3 from 'img/sub-company-head-img3.jpg' 
import img4 from 'img/sub-company-head-img4.jpg' 
import img5 from 'img/sub-company-head-img5.jpg' 
import img6 from 'img/sub-company-head-img6.jpg'  

//component 
import { Gallery }from 'components'

export default function SubCompanies() { 
     
    const distance= [260,205,155,95,40,-20]


    React.useEffect(() => {
        window.addEventListener('resize',  resize )
        return () => {
            window.removeEventListener('resize',  resize )
        }
    }, [])


    const open = (num)=>{ 
        const   companiesItem = document.querySelectorAll('.Companies__item'),
                button = document.querySelectorAll('.Companies__name button') ;
        let height = null 
        const width = document.body.offsetWidth 
        ///
        for( var i=0;i<6;i++){ 
            if( num === i){
                button[i].style = `transform: translateY( px)`
                companiesItem[i].classList.remove('unactive')
                companiesItem[i].classList.add('active') 
                companiesItem[i].classList.add('up') 
                button[i].classList.add('ac-btn') 
                height =  companiesItem[ num].getBoundingClientRect().height;
            }else{
                companiesItem[i].classList.remove('active')
                companiesItem[i].classList.remove('up')
                companiesItem[i].classList.add('unactive')
                button[i].classList.remove('ac-btn') 
            }
             companiesItem[ num].style ='';
        } 
        //
        if(width < 764){
            for(var s=0;s<6;s++){
                if( num < s){
                     button[s].style = `transform: translateY(${ height}px);`
                }else{
                     button[s].style = '';
                } 
            }
             companiesItem[ num].style =`transform: translateY(-${ distance[num]}px);`
        }  
         
    } 
 

    const resize = ()=>{
        const  buttons = document.querySelectorAll('.Companies__name button'),
               item =  document.querySelectorAll('.Companies__item'); 

        for(var f=0;f<6;f++){
            buttons[f].style = '';
            item[f].style = '';
            buttons[f].classList.remove('ac-btn') 
        } 

        buttons[0].classList.add('ac-btn')
    }
 
    return (
        <section id="Subsidiaries__companies">
            <div className="Subsidiaries__companies-content">
                <div className="Companies__name">
                    <button type="button" className="ac-btn"  onClick={open.bind(this,0)} >Company Name</button>
                    <button type="button"  onClick={open.bind(this,1)} >Company Name</button>
                    <button type="button"  onClick={open.bind(this,2)} >Company Name</button>
                    <button type="button"  onClick={open.bind(this,3)} >Company Name</button>
                    <button type="button"  onClick={open.bind(this,4)} >Company Name</button>
                    <button type="button"  onClick={open.bind(this,5)} >Company Name</button>
                </div>
                <div className="Companies__short-info">
                    <div className="Companies__item" > 
                        <img src={img1} alt="" className="Companies__image" />
                        <div className="Companies__about">
                            <h6>ABOUT US</h6>
                            <h3>Fox Free</h3>
                            <p>Contrary to popular belief, Lorem Ipum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure  the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className="Companies__our-process">
                            <h3>Our Process</h3>
                            <ul>
                                <li>Amet Sollicitudin Quam Dolor</li>
                                <li>Mollis Diipiscing Vestibulum</li>
                                <li>Nullam Venenatis Diipiscing</li>
                                <li>Vestibulum Nullam Venenatis</li>
                            </ul>
                        </div>
                        <div className="Companies__award">
                            <h3>Award Winning</h3>
                            <div className="Companies__award-items">
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Silver Price, Highest Return Portfolio</h6>
                                        <p>Morningstar Award, 2016</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Fintech Rookie</h6>
                                        <p>Tehnology Mag ,2015</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="Companies__Gallery">
                             <Gallery/>
                        </div> 
                    </div>
                    <div className="Companies__item unactive" > 
                        <img src={img2} alt="" className="Companies__image" />
                        <div className="Companies__about">
                            <h6>ABOUT US</h6>
                            <h3>Fox Free</h3>
                            <p>Contrary to popular belief, Lorem Ipum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure  the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className="Companies__our-process">
                            <h3>Our Process</h3>
                            <ul>
                                <li>Amet Sollicitudin Quam Dolor</li>
                                <li>Mollis Diipiscing Vestibulum</li>
                                <li>Nullam Venenatis Diipiscing</li>
                                <li>Vestibulum Nullam Venenatis</li>
                            </ul>
                        </div>
                        <div className="Companies__award">
                            <h3>Award Winning</h3>
                            <div className="Companies__award-items">
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Silver Price, Highest Return Portfolio</h6>
                                        <p>Morningstar Award, 2016</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Fintech Rookie</h6>
                                        <p>Tehnology Mag ,2015</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="Companies__Gallery">
                            <Gallery/>
                        </div>
                    </div>
                    <div className="Companies__item unactive" > 
                        <img src={img3} alt="" className="Companies__image" />
                        <div className="Companies__about">
                            <h6>ABOUT US</h6>
                            <h3>Fox Free</h3>
                            <p>Contrary to popular belief, Lorem Ipum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure  the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className="Companies__our-process">
                            <h3>Our Process</h3>
                            <ul>
                                <li>Amet Sollicitudin Quam Dolor</li>
                                <li>Mollis Diipiscing Vestibulum</li>
                                <li>Nullam Venenatis Diipiscing</li>
                                <li>Vestibulum Nullam Venenatis</li>
                            </ul>
                        </div>
                        <div className="Companies__award">
                            <h3>Award Winning</h3>
                            <div className="Companies__award-items">
                                <ul> 
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Silver Price, Highest Return Portfolio</h6>
                                        <p>Morningstar Award, 2016</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Fintech Rookie</h6>
                                        <p>Tehnology Mag ,2015</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="Companies__Gallery">
                            <Gallery/>
                        </div>
                    </div>
                    <div className="Companies__item unactive" > 
                        <img src={img4} alt="" className="Companies__image" />
                        <div className="Companies__about">
                            <h6>ABOUT US</h6>
                            <h3>Fox Free</h3>
                            <p>Contrary to popular belief, Lorem Ipum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure  the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className="Companies__our-process">
                            <h3>Our Process</h3>
                            <ul>
                                <li>Amet Sollicitudin Quam Dolor</li>
                                <li>Mollis Diipiscing Vestibulum</li>
                                <li>Nullam Venenatis Diipiscing</li>
                                <li>Vestibulum Nullam Venenatis</li>
                            </ul>
                        </div>
                        <div className="Companies__award">
                            <h3>Award Winning</h3>
                            <div className="Companies__award-items">
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Silver Price, Highest Return Portfolio</h6>
                                        <p>Morningstar Award, 2016</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Fintech Rookie</h6>
                                        <p>Tehnology Mag ,2015</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="Companies__Gallery">
                            <Gallery/>
                        </div>
                    </div>
                    <div className="Companies__item unactive" > 
                        <img src={img5} alt="" className="Companies__image" />
                        <div className="Companies__about">
                            <h6>ABOUT US</h6>
                            <h3>Fox Free</h3>
                            <p>Contrary to popular belief, Lorem Ipum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure  the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className="Companies__our-process">
                            <h3>Our Process</h3>
                            <ul>
                                <li>Amet Sollicitudin Quam Dolor</li>
                                <li>Mollis Diipiscing Vestibulum</li>
                                <li>Nullam Venenatis Diipiscing</li>
                                <li>Vestibulum Nullam Venenatis</li>
                            </ul>
                        </div>
                        <div className="Companies__award">
                            <h3>Award Winning</h3> 
                            <div className="Companies__award-items">
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Silver Price, Highest Return Portfolio</h6>
                                        <p>Morningstar Award, 2016</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Fintech Rookie</h6>
                                        <p>Tehnology Mag ,2015</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="Companies__Gallery">
                            <Gallery/>
                        </div>
                    </div>
                    <div className="Companies__item unactive" > 
                        <img src={img6} alt="" className="Companies__image" />
                        <div className="Companies__about">
                            <h6>ABOUT US</h6>
                            <h3>Fox Free</h3>
                            <p>Contrary to popular belief, Lorem Ipum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure  the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className="Companies__our-process">
                            <h3>Our Process</h3>
                            <ul>
                                <li>Amet Sollicitudin Quam Dolor</li>
                                <li>Mollis Diipiscing Vestibulum</li>
                                <li>Nullam Venenatis Diipiscing</li>
                                <li>Vestibulum Nullam Venenatis</li>
                            </ul>
                        </div>
                        <div className="Companies__award">
                            <h3>Award Winning</h3>
                            <div className="Companies__award-items">
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Silver Price, Highest Return Portfolio</h6>
                                        <p>Morningstar Award, 2016</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                    <li>
                                        <h6>Fintech Rookie</h6>
                                        <p>Tehnology Mag ,2015</p>
                                    </li>
                                    <li>
                                        <h6>The Best Of Financial Corp</h6>
                                        <p>Forbes Mag, 2014</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="Companies__Gallery">
                            <Gallery/>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}
