import './css/style.css'

//img
import landscape1 from 'img/landscape1.jpg'
import landscape2 from 'img/landscape2.jpg'
import chart1 from 'img/chart/chart1.jpg'
import chart2 from 'img/chart/chart2.png'
import chart3 from 'img/chart/chart3.png'

const Information = () => (
    
    <section id="Finance__information">
        <div className="General-information">
            <div className="General-information__image">
                <img src={landscape1}  alt=""/>
            </div>
            <div className="General-information__content">
                <div className="text">
                    <h4>GENERAL CHAIRMAN</h4>
                    <h1>If You Are Serious About Achieving Success In Any Area</h1>
                    <p>A mindset is a set of assumptions, methods, or notations that is so established that it creates a powerful incentive within you to continue to adopt or accept prior behaviours, choices, or tools.</p>
                    <p>It’s so powerful that it affects every decision making processes. It predetermines your responses and interpretations of situations.</p>
                    <img src={chart1} alt=""/>
                </div>
            </div>
        </div>
        <div className="Invesment-information">
            <div className="text">
                <h4>FINANCE</h4>
                <h1>Investment information</h1>
                <p>With value™, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.</p>
                <img src={chart2}  alt=""/>
            </div>
        </div>
        <div className="Graphic-information">
            <div className="Graphic-information__content">
                <div className="text">
                    <h4>FINANCE</h4>
                    <h1>Graphic Chart</h1>
                    <p>An effective and success driven mindset is one that makes the best use of all your available resources—your time, energy, opportunities, etc.</p>
                    <img src={chart3}  alt=""/>
                </div>
            </div>
            <div className="Graphic-information__image">
                <img src={landscape2}  alt=""/>
            </div>
        </div>
    </section> 
)

export default Information 

