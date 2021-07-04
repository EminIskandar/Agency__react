import React from 'react'
//img
import background from '../assets/img/Know_background.jpg'
import img1 from '../assets/img/icon/Cup-of-coffe.png'
import img2 from '../assets/img/icon/Awards-new.png'
import img3 from '../assets/img/icon/Projects-done.png'

export default function Know() {
    return (
        <section id="Know">
        <div className="Know__content">
           <div className="Know__text">
             <h1>Everything About SEO Agency</h1>
             <h4>Know more about us</h4>
             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). still in their infancy various versions have evolved.</p>
           </div>
           <div className="Know__activities">
            <div className="Know__activities-item" >
              <div className="Activities__item-image">
                <img src={img1}   alt="icon" />
                <p className="Activities__item-count"><span>24</span></p>
              </div>
              <h2>Cup of Coffee</h2>
            </div>
            <div className="Know__activities-item" >
              <div className="Activities__item-image">
                <img src={img2}   alt="icon" />
                <p className="Activities__item-count"><span>17</span></p>
              </div>
              <h2>Awards Taken</h2>
            </div>
            <div className="Know__activities-item" >
              <div className="Activities__item-image">
                <img src={img3}   alt="icon" />
                <p className="Activities__item-count"><span>36</span></p>
              </div>
              <h2>Projects Done</h2>
            </div>
           </div> 
           <div className="Know__background-image">
            <img src={background} alt="" />
          </div>
        </div>
    </section> 
    )
}
