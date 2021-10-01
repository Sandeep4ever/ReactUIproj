import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";
const AmenitiesSec = () => {
  return (
    <>
      <Maindiv>
        <FirstAne>
          <h1>02 amenities</h1>
          <Bounce right cascade>
            <h2>amenities</h2>
          </Bounce>
        </FirstAne>

        <Icons className="Iconsco">
          <First>
            <div>
              <img
                src="	https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5f956dc88ad74.svg"
                alt=""
              />
              <span> Kids' Play Area</span>
            </div>
            <div>
              <img
                src="	https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5f9270ffdec85.svg"
                alt=""
              />
              Meditation Pavillion
            </div>
            <div>
              <img
                src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5f957010ba97a.svg"
                alt=""
              />
              Mini theatre
            </div>
            <div>
              <img
                src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5f95709fa3a3f.svg"
                alt=""
              />
              Outdoor Seating Area
            </div>
          </First>
          <Second>
            <div>
              <img
                src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5f9571241f48c.svg"
                alt=""
              />
              Rainwater Harvesting System
            </div>
            <div>
              <img
                src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5fa9008a57d46.svg"
                alt=""
              />
              Recreational Lounge
            </div>
            <div>
              <img
                src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5fa8ffee9cc9e.svg"
                alt=""
              />
              Solar Energy System
            </div>
            <div>
              <img
                src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5f9571f6004d9.svg"
                alt=""
              />
              Spa
            </div>
          </Second>
        </Icons>

        <Allanemi>
          <img src="/images/forward.png" alt="" />
          <p>SHOW ALL AMENITIES</p>
        </Allanemi>
      </Maindiv>

      <ResourceSection>
        <Resources>
          <h1>03 resources</h1>
          <Bounce right cascade>
            <h2>resources</h2>
          </Bounce>
        </Resources>

        <Resources2>
          <SecFirst>
            <div className="BrochureIcon">
              <div>
                <img
                  styled={{ marginRight: "10px" }}
                  src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/assets_web/images/icons/brochure.svg"
                  alt=""
                />
              </div>
              <p> Brochure</p>
            </div>
            <div className="ForwardImg">
              <div>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    color: "#727171",
                    marginRight: "10px",
                  }}
                  src="/images/forward.png"
                  alt=""
                />
              </div>
              <p> View</p>
            </div>
          </SecFirst>
          <SecSecond>
            <div></div>
          </SecSecond>
        </Resources2>
      </ResourceSection>
    </>
  );
};

export default AmenitiesSec;

const Maindiv = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 0 80px;
`;
const FirstAne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  h1 {
    font-size: 0.938em;
    color: #727171;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  h2 {
    font-size: 9em;
    font-weight: 500;
    color: rgba(2, 0, 0, 0.05);
    font-family: "History-Pro";
  }
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`;
const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    flex: 1;
  }
  img {
    margin-right: 1em;
  }
`;

const Second = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    flex: 1;
  }
  img {
    margin-right: 1em;
  }
`;

const Allanemi = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 70px;

  ${"" /* align-items:center; */}
  cursor:pointer;
  width: 210px;
  img {
    width: 25px;
    height: 25px;
    color: #727171;
    margin-right: 10px;
  }
  p {
    color: #727171;
  }
`;

const ResourceSection = styled(Maindiv)``;
const Resources = styled(FirstAne)``;
const Resources2 = styled.div`
  display: flex;
`;
const SecFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: 20px 0 40px 0;

  img {
    width: 45px;
    heigth: 45px;
    margin-right: 10px;
  }
`;
const SecSecond = styled.div`
  flex: 1;
`;
