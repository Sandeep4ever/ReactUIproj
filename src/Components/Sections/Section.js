import React from "react";
import styled from "styled-components";
import RubberBand from 'react-reveal/RubberBand';

const Section = () => {
  return (
    <>
      <Wrap>
            <div>
             <RubberBand>
              <h1>kalpataru avante</h1>
              <h3>sanath nagar</h3>
              </RubberBand>
            </div>
      </Wrap>
      <Section2 className="section2">
       <div>
          <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/assets_web/images/icons/status.png" alt="" />
          <p>Status: Launching soon</p>
        </div>
        <div>
        <img src="	https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/assets_web/images/icons/location.png" alt="" />
         <p>Location: Sanath Nagar, Hyderabad</p>
        </div>
        <div>
        <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/assets_web/images/icons/price.png" alt="" />
          <p>Price: 2 BHK - 1.02 Cr.
          <br />
          3BHK -1.30Cr. 
          <br />
          (All Incl.) onw. </p>
        </div>
        <div>
        <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/assets_web/images/icons/possesion.png" alt="" />
          <p>Possession: Launching soon</p>
        </div>
        <div>
        <img src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/assets_web/images/icons/typology.png" alt="" />
          <p>Typology: 2 BHK, 3 BHK</p>
        </div>
      </Section2>
    </>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: url("https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d8e089331.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-transform:uppercase;
  color:white;

  div{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
    font-family: 'History-Pro';

    
    h1{
      padding-bottom:5px;
    }
  }
`;

const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  padding:0 80px;
  color: #001111;
  div{
    width: 20%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 0.843em;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    padding: 15px 12px 30px 10px;
    color:#727171;

    img{
      width:15px;
      margin-right:10px;
      color:#727171;

    }

  }

`;
