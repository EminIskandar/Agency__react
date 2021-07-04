import React from 'react'

export default function OurBlog() {

    const article = [ 
        {title : 'Startup Funding' , img : 'blog-img1.jpg'},
        {title : 'Family Asset Management' , img : 'blog-img2.jpg'},
        {title : 'Merger & Acquistion' , img : 'blog-img3.jpg'},
    ]


    return (
        
        <section id="Our-blog">
            <div className="Our-blog__header">
                <p>WHAT WE HAVE DONE</p>
                <h3>Our Blog</h3>
            </div>
            <div className="Our-blog__articles">
                    {
                        article.map((article, i) => {   
                            const img = require( `./../assets/img/blog/${article.img}`) 
                            return <div className="Our-blog__article-item"   key={i} >
                                        <div className="Our-blog__article-text">
                                            <p className="category">Our Case</p>
                                            <h3 className="title">{article.title}</h3>
                                            <span className="text">"Value really gets all of our best work in one place for the entire company to see. It has let us concentrate on the real work, and not on the plumbing."</span>
                                            <a className="read_more" href="/">  <span>READ MORE</span></a>
                                        </div>
                                        <div className="Our-blog__article-image">
                                            <img src={img.default} alt=''/>
                                        </div>
                                    </div>
                        })
                    } 
                
            </div>
        </section>
    )
}
