import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';

const Location = () => { 
  return (
    <>
      <LocationSection>
       <AnimationLocation>  
       <h1>04 Location </h1>
       <Bounce right cascade>

       <h2 >Location</h2>
       </Bounce>
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
