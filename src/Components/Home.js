import React from 'react';
import styled from 'styled-components';
import Section from './Sections/Section';
import AmenitiesSec from './Sections/AmenitiesSec';
import Section2 from './Sections/Section2';
import Location from './Sections/Location';
import Details from './Sections/Details';
const Home = () => {
  return (
    <>
      <Container>
      <Section/>
      <Section2/>
      <AmenitiesSec/>
      <Location/>
      <Details/>
      
       </Container>
    </>
  )
}

export default Home

const Container = styled.div`
height:100vh;


`
