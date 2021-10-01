import React,{useEffect,useRef} from 'react'
import styled from 'styled-components'

const Location = () => {
  const overviewRef=useRef(null);
  useEffect(()=>{
    document.addEventListener("scroll", () => {
      if(window.scrollY > 600){
        overviewRef.current.classList.add('animate__backInRight');
      }
      else{
        overviewRef.current.classList.remove('animate__backInRight');
      }
  });
  },[])

  return (
    <>
      <LocationSection>
       <AnimationLocation>  
       <h1>04 Location </h1>
       <h2 className="animate__animated" ref={overviewRef}>Location</h2>
       </AnimationLocation>
       <Imagelocation>
         <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/1630591463.jpg" alt="" />
       </Imagelocation>

       </LocationSection>
    </>
  )
}

export default Location

const LocationSection =styled.div`
margin:0 80px;

`
 const AnimationLocation =styled.div`
 
 display:flex;
    align-items: center;
    justify-content: space-between;
    text-transform:uppercase;

    h1{
   
    font-size: 0.938em;
    color: #727171;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
}
h2{
    font-size:9em;
   font-weight:500;
color: rgba(2, 0, 0, 0.05);
font-family: 'History-Pro';
  }
 `

 const Imagelocation =styled.div`
    cursor:pointer;
 `
