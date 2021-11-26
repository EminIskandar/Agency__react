import React  from 'react'
import './css/style.css'

export default function Vacancy() {

    const [index, setIndex] = React.useState(0)

    React.useEffect(()=>{
        const width = document.body.offsetWidth , 
              buttons = document.querySelectorAll('.Vacancies__content button'),
              item =  document.querySelectorAll('.Vacancies__about-job-item'); 
        let height = null,
            distance = [261,206,152,98,44,0]
            /// 
            for( var i=0;i<6;i++){ 
                if( index === i){
                    buttons[i].style = `transform: translateY( px)`
                    item[i].classList.remove('unactive')
                    item[i].classList.add('active') 
                    item[i].classList.add('up') 
                    buttons[i].classList.add('ac-btn') 
                    height = item[index].getBoundingClientRect().height; 
                }else{
                    item[i].classList.remove('active')
                    item[i].classList.remove('up')
                    item[i].classList.add('unactive')
                    buttons[i].classList.remove('ac-btn') 
                }
                item[index].style ='';
            } 
            
            //
            if(width < 764){
                for(var s=0;s<6;s++){
                    if( index < s){
                        buttons[s].style = `transform: translateY(${height}px);`
                    }else{
                        buttons[s].style = '';
                    } 
                }
                item[ index].style =`transform: translateY(-${distance[index]}px);`
            }
    },[index])
    
    React.useEffect(() => {
        window.addEventListener('resize',  resize )
        return () => {
            window.removeEventListener('resize',  resize )
        } 
    }, [])


    const vacancies = (numb)=>{
        setIndex(numb)
    }
    const resize = ()=>{ 
        const  buttons = document.querySelectorAll('.Vacancies__content button'),
               item =  document.querySelectorAll('.Vacancies__about-job-item'); 

            for(var f=0;f<6;f++){
                buttons[f].style = '';
                item[f].style = '';
                buttons[f].classList.remove('ac-btn') 
            } 

            buttons[0].classList.add('ac-btn')
    }
    return (
        <section id="Vacancies">
            <div className="Vacancies__content">
                <div className="Vacancies__name">
                    <button type="button" className="ac-btn"  onClick={vacancies.bind(this,0)}>Finance Manager </button>
                    <button type="button"  onClick={vacancies.bind(this,1)}>Marketing Speciali </button>
                    <button type="button"  onClick={vacancies.bind(this,2)}>Product Manager </button>
                    <button type="button"  onClick={vacancies.bind(this,3)}>Client Service Manager </button>
                    <button type="button"  onClick={vacancies.bind(this,4)}>Accountant </button>
                    <button type="button"  onClick={vacancies.bind(this,5)}>Network Engineer</button>
                </div>
                <div className="Vacancies__about-job"> 
                    <div className="Vacancies__about-job-item" > 
                        <div className="Job__title">
                            <h6>KEY HIRING AREAS</h6>
                            <h3>About this job</h3>
                            <div className="Job__title-list">
                                <ul>
                                    <li>Job type : Experience</li>
                                    <li>Level: Industry: Company</li>
                                    <li>Size: Company type:</li>
                                </ul>
                                <ul>
                                    <li>Permanent</li>
                                    <li>Mid-Level, Senior</li>
                                    <li>Software Development, Virtual Reality,</li>
                                    <li>201-500 people</li>
                                    <li>Private</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Job__description">
                            <h3>Job description</h3>
                            <p>As a member of this team, you’ll jump into the deep end of the latest web technologies like GoLang, PHP, Python and Javascript. You will build RESTful APIs, fluid user interfaces, tools, test frameworks and microservices. You’ll engineer your features to be scalable and modular in a large application, and you’ll also embrace writing extensive tests that let your team move fast and break nothing.</p>
                        </div>
                        <div className="Job__requirements">
                            <h3>Requirements</h3>
                            <ul>
                                <li>Excellent breadth of web technology knowledge. Including GoLang, Python, Javascript or PHP</li>
                                <li>Experience of TDD or BDD. Unit testing</li>
                                <li>Experience and knowledge of cloud technologies such as AWS/Google Compute</li>
                                <li>Experience of commercial software development to deadlines</li>
                                <li>Excellent knowledge of development tools and processes</li>
                                <li>Cross platform development over two of OSX, Linux and Windows</li>
                                <li>Good communication skills, well organised, good time management</li>
                            </ul>
                        </div>
                        <div className="Job__benefits">
                            <h3>Benefits</h3>
                            <div className="Job__benefits-content">
                                <ol>
                                    <li>Excellent holiday package</li>
                                    <li>Private Medical Insurance</li>
                                    <li>Lots of fun things to do ie. beer o’clock, parties, movie days etc.</li>
                                    <li>Life Assurance Advantage Scheme discount</li>
                                    <li>Pension Health and Wellbeing scheme</li>
                                    <li>Cycle to work scheme Season Ticket Loan</li>
                                </ol>
                            </div>
                        </div> 
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                    <div className="Vacancies__about-job-item unactive" > 
                        <div className="Job__title">
                            <h6>KEY HIRING AREAS</h6>
                            <h3>About this job</h3>
                            <div className="Job__title-list">
                                <ul>
                                    <li>Job type : Experience</li>
                                    <li>Level: Industry: Company</li>
                                    <li>Size: Company type:</li>
                                </ul>
                                <ul>
                                    <li>Permanent</li>
                                    <li>Mid-Level, Senior</li>
                                    <li>Software Development, Virtual Reality,</li>
                                    <li>201-500 people</li>
                                    <li>Private</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Job__description">
                            <h3>Job description</h3>
                            <p>As a member of this team, you’ll jump into the deep end of the latest web technologies like GoLang, PHP, Python and Javascript. You will build RESTful APIs, fluid user interfaces, tools, test frameworks and microservices. You’ll engineer your features to be scalable and modular in a large application, and you’ll also embrace writing extensive tests that let your team move fast and break nothing.</p>
                        </div>
                        <div className="Job__requirements">
                            <h3>Requirements</h3>
                            <ul>
                                <li>Excellent breadth of web technology knowledge. Including GoLang, Python, Javascript or PHP</li>
                                <li>Experience of TDD or BDD. Unit testing</li>
                                <li>Experience and knowledge of cloud technologies such as AWS/Google Compute</li>
                                <li>Experience of commercial software development to deadlines</li>
                                <li>Excellent knowledge of development tools and processes</li>
                                <li>Cross platform development over two of OSX, Linux and Windows</li>
                                <li>Good communication skills, well organised, good time management</li>
                            </ul>
                        </div>
                        <div className="Job__benefits">
                            <h3>Benefits</h3>
                            <div className="Job__benefits-content">
                                <ol>
                                    <li>Excellent holiday package</li>
                                    <li>Private Medical Insurance</li>
                                    <li>Lots of fun things to do ie. beer o’clock, parties, movie days etc.</li>
                                    <li>Life Assurance Advantage Scheme discount</li>
                                    <li>Pension Health and Wellbeing scheme</li>
                                    <li>Cycle to work scheme Season Ticket Loan</li>
                                </ol>
                            </div>
                        </div> 
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                    <div className="Vacancies__about-job-item unactive" > 
                        <div className="Job__title">
                            <h6>KEY HIRING AREAS</h6>
                            <h3>About this job</h3>
                            <div className="Job__title-list">
                                <ul>
                                    <li>Job type : Experience</li>
                                    <li>Level: Industry: Company</li>
                                    <li>Size: Company type:</li>
                                </ul>
                                <ul>
                                    <li>Permanent</li>
                                    <li>Mid-Level, Senior</li>
                                    <li>Software Development, Virtual Reality,</li>
                                    <li>201-500 people</li>
                                    <li>Private</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Job__description">
                            <h3>Job description</h3>
                            <p>As a member of this team, you’ll jump into the deep end of the latest web technologies like GoLang, PHP, Python and Javascript. You will build RESTful APIs, fluid user interfaces, tools, test frameworks and microservices. You’ll engineer your features to be scalable and modular in a large application, and you’ll also embrace writing extensive tests that let your team move fast and break nothing.</p>
                        </div>
                        <div className="Job__requirements">
                            <h3>Requirements</h3>
                            <ul>
                                <li>Excellent breadth of web technology knowledge. Including GoLang, Python, Javascript or PHP</li>
                                <li>Experience of TDD or BDD. Unit testing</li>
                                <li>Experience and knowledge of cloud technologies such as AWS/Google Compute</li>
                                <li>Experience of commercial software development to deadlines</li>
                                <li>Excellent knowledge of development tools and processes</li>
                                <li>Cross platform development over two of OSX, Linux and Windows</li>
                                <li>Good communication skills, well organised, good time management</li>
                            </ul>
                        </div>
                        <div className="Job__benefits">
                            <h3>Benefits</h3>
                            <div className="Job__benefits-content">
                                <ol>
                                    <li>Excellent holiday package</li>
                                    <li>Private Medical Insurance</li>
                                    <li>Lots of fun things to do ie. beer o’clock, parties, movie days etc.</li>
                                    <li>Life Assurance Advantage Scheme discount</li>
                                    <li>Pension Health and Wellbeing scheme</li>
                                    <li>Cycle to work scheme Season Ticket Loan</li>
                                </ol>
                            </div>
                        </div> 
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                    <div className="Vacancies__about-job-item unactive" > 
                        <div className="Job__title">
                            <h6>KEY HIRING AREAS</h6>
                            <h3>About this job</h3>
                            <div className="Job__title-list">
                                <ul>
                                    <li>Job type : Experience</li>
                                    <li>Level: Industry: Company</li>
                                    <li>Size: Company type:</li>
                                </ul>
                                <ul>
                                    <li>Permanent</li>
                                    <li>Mid-Level, Senior</li>
                                    <li>Software Development, Virtual Reality,</li>
                                    <li>201-500 people</li>
                                    <li>Private</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Job__description">
                            <h3>Job description</h3>
                            <p>As a member of this team, you’ll jump into the deep end of the latest web technologies like GoLang, PHP, Python and Javascript. You will build RESTful APIs, fluid user interfaces, tools, test frameworks and microservices. You’ll engineer your features to be scalable and modular in a large application, and you’ll also embrace writing extensive tests that let your team move fast and break nothing.</p>
                        </div>
                        <div className="Job__requirements">
                            <h3>Requirements</h3>
                            <ul>
                                <li>Excellent breadth of web technology knowledge. Including GoLang, Python, Javascript or PHP</li>
                                <li>Experience of TDD or BDD. Unit testing</li>
                                <li>Experience and knowledge of cloud technologies such as AWS/Google Compute</li>
                                <li>Experience of commercial software development to deadlines</li>
                                <li>Excellent knowledge of development tools and processes</li>
                                <li>Cross platform development over two of OSX, Linux and Windows</li>
                                <li>Good communication skills, well organised, good time management</li>
                            </ul>
                        </div>
                        <div className="Job__benefits">
                            <h3>Benefits</h3>
                            <div className="Job__benefits-content">
                                <ol>
                                    <li>Excellent holiday package</li>
                                    <li>Private Medical Insurance</li>
                                    <li>Lots of fun things to do ie. beer o’clock, parties, movie days etc.</li>
                                    <li>Life Assurance Advantage Scheme discount</li>
                                    <li>Pension Health and Wellbeing scheme</li>
                                    <li>Cycle to work scheme Season Ticket Loan</li>
                                </ol>
                            </div>
                        </div> 
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                    <div className="Vacancies__about-job-item unactive" > 
                        <div className="Job__title">
                            <h6>KEY HIRING AREAS</h6>
                            <h3>About this job</h3>
                            <div className="Job__title-list">
                                <ul>
                                    <li>Job type : Experience</li>
                                    <li>Level: Industry: Company</li>
                                    <li>Size: Company type:</li>
                                </ul>
                                <ul>
                                    <li>Permanent</li>
                                    <li>Mid-Level, Senior</li>
                                    <li>Software Development, Virtual Reality,</li>
                                    <li>201-500 people</li>
                                    <li>Private</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Job__description">
                            <h3>Job description</h3>
                            <p>As a member of this team, you’ll jump into the deep end of the latest web technologies like GoLang, PHP, Python and Javascript. You will build RESTful APIs, fluid user interfaces, tools, test frameworks and microservices. You’ll engineer your features to be scalable and modular in a large application, and you’ll also embrace writing extensive tests that let your team move fast and break nothing.</p>
                        </div>
                        <div className="Job__requirements">
                            <h3>Requirements</h3>
                            <ul>
                                <li>Excellent breadth of web technology knowledge. Including GoLang, Python, Javascript or PHP</li>
                                <li>Experience of TDD or BDD. Unit testing</li>
                                <li>Experience and knowledge of cloud technologies such as AWS/Google Compute</li>
                                <li>Experience of commercial software development to deadlines</li>
                                <li>Excellent knowledge of development tools and processes</li>
                                <li>Cross platform development over two of OSX, Linux and Windows</li>
                                <li>Good communication skills, well organised, good time management</li>
                            </ul>
                        </div>
                        <div className="Job__benefits">
                            <h3>Benefits</h3>
                            <div className="Job__benefits-content">
                                <ol>
                                    <li>Excellent holiday package</li>
                                    <li>Private Medical Insurance</li>
                                    <li>Lots of fun things to do ie. beer o’clock, parties, movie days etc.</li>
                                    <li>Life Assurance Advantage Scheme discount</li>
                                    <li>Pension Health and Wellbeing scheme</li>
                                    <li>Cycle to work scheme Season Ticket Loan</li>
                                </ol>
                            </div>
                        </div> 
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                    <div className="Vacancies__about-job-item unactive" > 
                        <div className="Job__title">
                            <h6>KEY HIRING AREAS</h6>
                            <h3>About this job</h3>
                            <div className="Job__title-list">
                                <ul>
                                    <li>Job type : Experience</li>
                                    <li>Level: Industry: Company</li>
                                    <li>Size: Company type:</li>
                                </ul>
                                <ul>
                                    <li>Permanent</li>
                                    <li>Mid-Level, Senior</li>
                                    <li>Software Development, Virtual Reality,</li>
                                    <li>201-500 people</li>
                                    <li>Private</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Job__description">
                            <h3>Job description</h3>
                            <p>As a member of this team, you’ll jump into the deep end of the latest web technologies like GoLang, PHP, Python and Javascript. You will build RESTful APIs, fluid user interfaces, tools, test frameworks and microservices. You’ll engineer your features to be scalable and modular in a large application, and you’ll also embrace writing extensive tests that let your team move fast and break nothing.</p>
                        </div>
                        <div className="Job__requirements">
                            <h3>Requirements</h3>
                            <ul>
                                <li>Excellent breadth of web technology knowledge. Including GoLang, Python, Javascript or PHP</li>
                                <li>Experience of TDD or BDD. Unit testing</li>
                                <li>Experience and knowledge of cloud technologies such as AWS/Google Compute</li>
                                <li>Experience of commercial software development to deadlines</li>
                                <li>Excellent knowledge of development tools and processes</li>
                                <li>Cross platform development over two of OSX, Linux and Windows</li>
                                <li>Good communication skills, well organised, good time management</li>
                            </ul>
                        </div>
                        <div className="Job__benefits">
                            <h3>Benefits</h3>
                            <div className="Job__benefits-content">
                                <ol>
                                    <li>Excellent holiday package</li>
                                    <li>Private Medical Insurance</li>
                                    <li>Lots of fun things to do ie. beer o’clock, parties, movie days etc.</li>
                                    <li>Life Assurance Advantage Scheme discount</li>
                                    <li>Pension Health and Wellbeing scheme</li>
                                    <li>Cycle to work scheme Season Ticket Loan</li>
                                </ol>
                            </div>
                        </div> 
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                </div>
            </div>
        </section> 
    )
}
