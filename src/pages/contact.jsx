import React from 'react'

//hook
import  { useNavColor }  from './../hook/useNavColor'

export default function Contact() {

    document.title = "finAd | Contact"

    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(5,'black') 
    } ) 


    return (
        <main id="Contact">
            <section className="Contact__form">
                <div className="Contact__title">
                    <h3>Contact Us</h3>
                </div>
                <form>
                    <div className="Contact__inputs">
                        <div className="Email">
                            <label htmlFor="Email">Email address*</label>
                            <input type="email" id="Email" />
                        </div>
                        <div className="Subject">
                            <label htmlFor="Subject">Subject</label>
                            <input type="text" id="Subject" />
                        </div>
                        <div className="Message">
                            <label htmlFor="Message">Message</label>
                            <input type="text" id="Message" />
                        </div>
                    </div>
                    <div className="Contact__button">
                        <button type="submit" className="Send_button">SEND MAIL</button>
                    </div>
                </form>
            </section >
            <section  className="Contact__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6076.667270126055!2d49.83063066240123!3d40.40145916008554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087886fc97555%3A0x63d1056df10fb889!2sOlympic%20Star!5e0!3m2!1str!2s!4v1591879459561!5m2!1str!2s" width="100%" height="450" frameBorder="0"   allowFullScreen="" aria-hidden="false" tabIndex="0" title="Map"></iframe>
            </section > 
        </main>  
    )
}
