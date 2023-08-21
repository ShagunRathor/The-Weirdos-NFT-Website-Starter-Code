import React from 'react'
import styled, { keyframes } from 'styled-components'
import TypeWriterText from '../TypeWriterText'
import CoverVideo from '../CoverVideo'
import RoundTextBlack from '../../assets/Rounded-Text-Black.png'


const Section =styled.section`
min-height:90%;
width:100vw;
postion:relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width:75%;
min-height:80vh;
margin:0 auto;



display:flex;
justify-content:center;
align-items:center;
`


const Box =styled.div`
 width:50%;
 height:100%;
 display:flex;
 flex-direction:'column;
 justify-content:center;
 align-items:center;
font-size:1.5rem;
`

const rotate = keyframes`
100%{
  transform:rotate(1turn);
}
`
const Round =styled.div`
position:absolute;
bottom:8rem;
right:90%;
width:8rem;
height:8rem;
font-size:2rem;
border:1px solid #202020;
border-radius:50%;

img{
  width:100%;
  height:auto;
  animation:${rotate} 6s linear infinite reverse;
}
`


const Circle = styled.span`
 width:3rem;
 height:3rem;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:50%;
 

 position:absolute;
 top:50%;
 left:50%;
 transform:translate(-50%,-50%);
 cursor:pointer;


 background-color: #202020;
 color: #ffffff;
 font-size:${props => props.theme.fontxs};
`
const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box> <TypeWriterText /> </Box>
        <Box> <CoverVideo /> </Box>
        


        <Round>
          <Circle>
            &#x2193; 
          </Circle>
        <img src={RoundTextBlack} alt="NFT" /> 
        </Round>
      </Container>
    </Section>
  )
}

export default Home