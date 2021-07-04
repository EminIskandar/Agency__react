import React from 'react'

export default function SelectProcess() {

    const [index, setIndex] = React.useState(0)
    const [lastIndex, setLastIndex] = React.useState(0)
    const root = React.useRef(null)

    React.useEffect(() => {
        const sectionName = root.current.querySelectorAll('.Selection-process__section p'),
              sectionItem = root.current.querySelectorAll('.Selection-process__section-item'),
              distance = [140,92,45,2]; 

        var width = document.body.offsetWidth,
            btnDistance = 0;
        for(var f=0;f<4;f++){
            var itemWidth =  sectionItem[f].offsetHeight;
            if(itemWidth !== 0){
                btnDistance = itemWidth
            }
        }
        for(var i=0;i<4;i++){
            sectionName[i].classList.remove('s-active')
            sectionName[i].classList.remove('s-active-arrow'+i)
            sectionItem[i].classList.remove('active--section')
            sectionItem[i].classList.remove('p-up')
            sectionItem[i].classList.add('deactive--section')
            sectionItem[i].style = '';
            sectionName[i].style =''
        }
        if(width < 769){
            for(var t=0;t<4;t++){
                if(index < t){
                    sectionName[t].style =`transform: translateY(${btnDistance+4}px);`
                }
            }
            sectionItem[index].classList.remove('deactive--section')
            sectionItem[index].classList.add('active--section')
            sectionItem[index].classList.add('p-fadeIn')
            sectionItem[index].style='transform: translateY(-'+distance[index]+'px) '
        }else{
            sectionItem[lastIndex].classList.remove('deactive--section')
            sectionItem[lastIndex].style ="visibility: visible; display: flex ; position: absolute"
            //
            sectionName[index].classList.add('s-active')
            sectionName[index].classList.add('s-active-arrow'+index)
            //
            sectionItem[index].classList.remove('deactive--section')
            sectionItem[index].classList.add('active--section')
            sectionItem[index].classList.add('p-up')
            //
            setLastIndex(index) 
        }
         
        return () => {
            
        }
    }, [index])

    React.useEffect(() => {
        window.addEventListener('resize' , resize)
        return () => {
            window.removeEventListener('resize' , resize)
        }
    } )

    const section = (numb)=>{
         setIndex(numb)
    }

    const resize =  ()=>{
        var width = document.body.offsetWidth;
        const sectionName = document.querySelectorAll('.Selection-process__section p');
        const sectionItem = document.querySelectorAll('.Selection-process__section-item');
        if(width < 769){
              //
        }else{
          for(var t=0;t<4;t++){ 
              sectionItem[t].style =``  
              sectionItem[t].classList.remove('p-fadeIn') 
              sectionName[t].style =``  
          }
          sectionName[index].classList.add('s-active-arrow'+index)
          sectionName[index].classList.add('s-active')
          
        }
    }


    return (
        <section className="Selection-process" ref={root}>
            <div className="Selection-process__title">
                <h4>SUBSIDIARIES</h4>
                <h1>Selection Process</h1>
                <p>With value™, we don’t make you start from an empty slate. All you have to do is to pick the elements you like best and combine them.</p>
            </div>
            <div className="Selection-process__content">
                <div className="Selection-process__section">
                    <p className=" s-active s-active-arrow0" onClick={section.bind(this,0)}>APPLICATION INFO</p>
                    <p onClick={section.bind(this,1)}>INTERVIEW</p>
                    <p onClick={section.bind(this,2)}>SKILL EVALUATION</p>
                    <p onClick={section.bind(this,3)}>EMPOYMENT</p>
                </div>
                <div className="Selection-process__section-content">
                    <div className="Selection-process__section-item active--section">
                        <h3>Application Information Verification</h3>
                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                    <div className="Selection-process__section-item deactive--section">
                        <h3>Interview Information Verification</h3>
                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                    <div className="Selection-process__section-item deactive--section">
                        <h3>Skill Information Verification</h3>
                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                    <div className="Selection-process__section-item deactive--section">
                        <h3>Employment Information Verification</h3>
                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <a href="# " className="apply-now"> <span>APPLY NOW</span></a>
                    </div>
                </div>
            </div>
    </section>
    )
}
