import React from 'react'

//hook
import  { useNavColor }  from './../hook/useNavColor'

export default function Error() {

    document.title = "finAd | Page not found"

    const [changeColor] = useNavColor()

    React.useEffect(() => { 
         changeColor(5,'black') 
    } ) 

    return (
        <main>
           <section id="Error__content">
                <div className="Error__items">
                    <div className="Error__code">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, Page not found!</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a href="/" className="link" > Home </a>
                </div>
            </section>
        </main>
    )
}
