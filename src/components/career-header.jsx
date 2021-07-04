import React from 'react'

//img
import icon1 from './../assets/img/icon/Develop.png'
import icon2 from './../assets/img/icon/Puzzle.png'
import icon3 from './../assets/img/icon/Calendar.png' 

export default function careerHeader() {
    return (
        <section className="Career__header">
           <div className="Career__text">
                <h4>SUBSIDIARIES</h4>
                <h1>Why our company ?</h1>
                <p>With value™, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.</p>
           </div>
           <div className="Career__sections">
            <div className="Career__sections-item"  >
              <div className="img">
                <img  src={icon1} alt="icon" />
              </div>
              <h2>Personal development</h2>
              <p>"Value really gets all of our best work in one place.</p>
            </div>
            <div className="Career__sections-item"  >
              <div className="img">
                <img  src={icon2} alt="icon" />
              </div>
              <h2>Company culture</h2>
              <p>"Value really gets all of our best work in one place.</p>
            </div>
            <div className="Career__sections-item"  >
              <div className="img">
                <img  src={icon3} alt="icon" />
              </div>
              <h2>Benefits</h2>
              <p>"Value really gets all of our best work in one place.</p>
            </div>
           </div>
        </section>
    )
}
