import React from 'react'

export default function AboutUs() {


    const section = [
        { name : 'Consulting',      img : 'Consulting.png' },
        { name :'Finance',          img : 'Finance.png'},
        { name :'Fund Raising',     img : 'Fund-Raising.png'}, 
        { name :'Analysing',        img : 'Analysing.png'},
        { name : 'Business Model',  img : 'Business-Model.png' },
        { name :'24/7 Support',     img : 'Support.png'}
    ]


    return (
        <section className="About-us">
            <div className="About-us__header">
                <p>ABOUT US</p>
                <h6>Give your startup a jump start!</h6>
                <span>With value™, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.</span>
            </div> 
            <div className="About-us__content">
                {
                    section.map((section, i) => {   
                        const img = require( `./../assets/img/icon/${section.img}`) 
                        return  <div className="About-us__content-item"  key={i}> 
                                    <img  src={img.default} alt=""/>
                                    <p className="About-us__content-explanation" >The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </p> 
                                    <p className="About-us__content-title"> {section.name}</p>
                                </div> 
                    })
                } 
            </div>
        </section> 
    )
}
