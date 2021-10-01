import React from 'react'
import styled from 'styled-components'
const Details = () => {
  return (
    <>
    <ReraDetails>
      <p>RERA DETAILS </p>
      <span>+</span>
    </ReraDetails>

      <AllDetailsse>
           <div >
             <p>COMPANY PROFILE</p>
             <p>LEADERSHIP TEAM</p>
             <p>50+ YEARS OF OUR LEGACY</p>
           </div>
           <div >
             <p>RESIDENTIAL PROJECTS</p>
             <p>COMMERCIAL PROJECTS</p>
           </div>
           <div >
             <p>GROUP COMPANIES</p>
             <p>CSR</p>
           </div>
           <div >
             <p>OUR OFFICES</p>
             <p>CAREERS</p>
             <p>VENDOR CONNECT</p>
           </div>
           <div >
             <p>AWARDS</p>
             <p>RERA</p>
           </div>
           <div > 
             <p>ENQUIRE NOW</p>
             <p>+91 22 3064 3065</p>
             <p>SALES@KALPATARU.COM</p>
             <p>FOLLOW</p>
            
              <img src="/images/youtube.png" alt="" />
              
              <img style={{paddingLeft:"10px"}} src="/images/linkedin.png" alt="" />
              
           </div>
      </AllDetailsse>

    </>
  )
}

export default Details

const ReraDetails =styled.div`
margin:40px  80px 40px  80px;
padding-top:20px;
padding-bottom:20px;
display:flex;
align-items:center;
justify-content:space-between;

span{
  cursor:pointer;
  font-size:2em;
  color: #403F3F;

}
p{
   font-family:'History-Pro';
    font-size: 1.563em;
    color: #403F3F;
   cursor:pointer;
}
border-top:1px solid #727171;
border-bottom:1px solid #727171;

`
const AllDetailsse =styled.div`
margin:0 80px;
display:flex;

padding:5px;

div{
  flex:1;
}
p{
  color: #000000;
    font-size: 0.6em;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding: 0.7rem 0;
    text-transform: uppercase;
    cursor:pointer;

    
}
img{
      cursor:pointer;
    }

`