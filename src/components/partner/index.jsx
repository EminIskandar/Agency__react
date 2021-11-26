import React from 'react'
import './css/style.css'


const logos= [
    { logo:'logo1.png' } ,{logo:'logo2.png'},{logo:'logo3.png'},{logo:'logo4.png'},
    {logo:'logo5.png'},{logo:'logo6.png'},{logo:'logo7.png'},{logo:'logo8.png'},
    {logo:'logo9.png'},{logo:'logo10.png'},{logo:'logo11.png'},{logo:'logo12.png'}, 
    {logo:'logo13.png'} , {logo:'logo14.png'}
]

const Partner = () => (
    <section id="Partner">
        <div className="Partner__header">
            <p>PARTNERS</p>
            <h6>Our Great Clients</h6>
            <span>With value, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.</span>
        </div>
        <div className="Partner__logos" >
            {
                logos.map((partner, i) => {   
                const img = require( `img/logo/${partner.logo}`) 
                    return  <div className="Partner__logo" key={i}>
                                <img src={img.default}  alt="partner-logo" />
                            </div>  
                })
            } 
        </div>
    </section>
)
export default Partner
