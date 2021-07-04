import React from 'react'

export default function Achievements() {

    const timeline = [
        { year : ' 2018', title : 'The Company of 2018' , text : 'With value, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.' },
        { year : ' 2017', title : 'The Service of 2017' , text : 'With value, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.' },
        { year : ' 2014', title : 'Top 20 Tax Payer' , text : 'With value, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.' },
        { year : ' 2010', title : 'The Most Customer Satisfaction Company' , text : 'With value, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.' }
    ]
    return (
        <section id="Achievements">
        <div className="Achievements__content">
            <div className="Achievements__title">
                <p>HONORS</p>
                <h3>Achievements</h3>
            </div>
            <div className="Achievements__timeline">
                <div className="Achievements__lines">
                    <div className="Achievements__line"></div>
                    <div className="Achievements__dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div> 
                {
                    timeline.map((timeline, i) => {   
                        return   <div className="Achievements__timeline-item" key={i}>
                                    <span className="Timeline__item-year">{ timeline.year }</span>
                                    <div className="Timeline__item-text">
                                        <div className="Timeline__item-text_content">
                                            <h3>{ timeline.title}</h3>
                                            <p>{timeline.text}</p> 
                                        </div>
                                    </div>
                                </div>
                    })
                }  
            </div>
            <a className="read-more" href="/">  <span>READ MORE</span></a>  
        </div>
    </section>
    )
}
