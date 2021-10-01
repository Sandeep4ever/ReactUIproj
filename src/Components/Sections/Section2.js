import React,{useEffect,useRef} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import "animate.css";
const Section2 = () => {
  const overviewRef=useRef(null);
  useEffect(()=>{
    document.addEventListener("scroll", () => {
      if(window.scrollY > 120){
        overviewRef.current.classList.add('animate__backInRight');
      }
      else{
        overviewRef.current.classList.remove('animate__backInRight');
      }
  });
  },[])
  return (
    <Wrap>
      <OverView>
         
           <h1>01 overview</h1>
           <h2 className="animate__animated" ref={overviewRef}>overview</h2>
        
      </OverView>
      <TextSection>
        <div >
          <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94edc4a2.jpg" alt="" />
        </div>

         <CustomText>
        <div>
        <Fade right big cascade>
        <h1>Kalpataru Avante</h1>
        </Fade>

         <h2>After the success of its first completed project, Kalpataru
          brings yet another landmark to Sanath Nagar – Kalpataru Avante.
         <br /> 
         <br />
          Unique in shape, intelligent in design, Kalpataru Avante is a home 
          your heart always wished for. Vastu compliant and adorned with a host 
          of amenities spread across 3 different levels, it’s located in a bustling 
          neighborhood that brings the city closer. With a plush clubhouse and a perfect
           spread of indoor and outdoor comforts, it’s a home that lets you indulge in every desire.
           </h2>
        </div>
           </CustomText>
      </TextSection>
  <Images >
   <HeadShake>
    <div>
    <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94f06661.jpg" alt="" />
   <span> Amenities at three different lev</span>
    </div>
    <div>
   <img src="	https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94f296db.jpg" alt="" />
   <span> Creche with kids’ play area.</span>
    </div>
   <div>
     <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94f3ee97.jpg" alt="" />
     <span> Spacious multi-purpose hall for celebrations.</span>
   </div> 
    <div>
   <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94f5b1da.jpg" alt="" />
   <span>   Vastu Compliant homes with Puja Niche*</span>
  </div>
  </HeadShake>
  </Images>

    </Wrap>
  )
}

export default Section2


const Wrap = styled.div`
width:100vw;
padding:0 80px;

`
const  OverView =styled.div`
width:100%;
height:50px;
align-items:center;
justify-content:space-between;
display:flex;
margin: 3.750em 0 1.5em 0em;

  h2{
    font-size:10em;
   font-weight:200px;
color: rgba(2, 0, 0, 0.05);
font-family: 'History-Pro';
  }

  h1{
    font-size: 1.4em;
    color: #727171;
    font-weight: 600;
  }
`

const TextSection =styled.div`
display:flex;
img{
  width:450px;
  height:580px;
}

`
const CustomText =styled.div`

width: 100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;



h1{
  margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    color:#727171;

}
h2{
  width:550px;
  height:213px;
  font-size: 0.843em;
    padding-top: 2em;
    padding-bottom: 2em;
    color:#727171;
}

`

const Images =styled.div`
display:flex;

div{
  width: 100%;
padding:0 10px;
margin:2em 0 2em;
}

span{
  padding-top:10px;
}
img{
  width: 319px;
 height:411px;
 
}

`