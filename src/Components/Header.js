import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Zoom from 'react-reveal/Zoom';

const Header = () => {
  const [navTextClr, setNavTextClr] = useState("#fff");
  const [navBg, setNavBg] = useState("");
  const highLightRef=useRef(null);
  useEffect(()=>{
    document.addEventListener("scroll", () => {
      if(window.scrollY > 70){
        setNavBg("#fff");
        setNavTextClr("#000");
        highLightRef.current.classList.remove('lightBoxStyle');
      }
      else{
        setNavBg("");
        setNavTextClr("#fff");
        highLightRef.current.classList.add('lightBoxStyle');
      }
  });
},[])
  return (
    <Container style={{color:navTextClr,background:navBg}}>
    <Zoom left>
     <a href="#" style={{color:navTextClr}}>
       <img src="#" alt="" />
       Kalpa taru
     </a>
     </Zoom>
     <Zoom right>
    <Menu >
       <a href="#" style={{color:navTextClr}} className="lightBoxStyle" ref={highLightRef}>enquire now</a>
       <CustomMenu  style={{color:navTextClr}} />
    </Menu>
    </Zoom>

    </Container>
  )
}

export default Header

const Container =styled.div`
font-size:2em;
position:fixed;
display:flex;
align-item:center;
justify-content:space-between;
padding: 24px 80px;
top:0;
left:0;
right:0;

a{
  text-decoration:none;
  font-weight:500;
  text-transform: uppercase;
  
}

`

const Menu =styled.div`

a{
  text-decoration:none;
  text-transform: uppercase;
  margin:0 1.5rem;
}
`
const CustomMenu =styled(MenuIcon)`
font-size:3em;
cursor:pointer;

`
