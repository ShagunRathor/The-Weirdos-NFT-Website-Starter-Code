import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-9.svg';

const Section = styled.section`
min-height:100vh;
width:100vw;
background-color:#202020;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;

&>*:first-child{
  animation-duration: 20s;
}

&>*:last-child{
  animation-duration: 15s;
}
`
const move = keyframes`
0%{ transform: translateX(100%)  };
100%{ transform: translateX(-100%)  }
`
const Row = styled.div`
white-space:nowrap;
box-sizing:content-box;
margin:2rem 2rem;
display:flex;
font-size:24px;
margin-bottom:5rem;
animation: ${move}  linear infinite ${props => props.direction};
div{
  width:5rem;
  height:5rem;
  margin:2rem;
}
`
const ImgContainer = styled.div`
  width:15rem !important;
  height:15rem !important;
  margin: 0 1rem;
  background-color:#ffffff;
  border-radius:20px;
  cursor:pointer;

  img{
    width:100%;
    height:100%;
  }
  `

const Details = styled.div`
display:flex;
justify-content:space-btween;
padding-right:100rem;
padding-bottom:20px;
background-color:#202020;

span{
  font-size:${props => props.theme.fontlg};
  color:#ffffff;
  line-heightr:1.5rem;
}
h3{
  font-size:${props => props.theme.fontmd};
  color:#ffffff;
}
`
const NftItem =({img, number=0, price=0, passRef}) => {
  
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }
  
  return(
  <ImgContainer  onMouseOver={e => pause(e)}    onMouseOut={e => play(e)}>
  <img src={img} alt="The Weirdos" />
 <Details>
    <div>
     <span>Weirdos</span>  <br />
     <h3>#{number}</h3>
    </div>
    <div>
     <span>Price</span>  <br />
     <h3>{Number(price).toFixed(1)}</h3>
    </div>
 </Details>
  </ImgContainer>
  )
}
const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section id="showcase">
    <Row direction="none" ref={Row1Ref}>
             <NftItem img={img1}  number={888} price={1.5}   passRef = {Row1Ref} /> 
            <NftItem img={img2}   number={809} price={2.4}  passRef = {Row1Ref} />
            <NftItem img={img3}   number={125} price={3.5}  passRef = {Row1Ref} />
            <NftItem img={img4}  number={786} price={6.5}   passRef = {Row1Ref} />
            <NftItem img={img5}   number={900} price={4.5}  passRef = {Row1Ref}  /> 
            
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
              <NftItem img={img6}  number={456} price={2.5}  passRef = {Row2Ref} /> 
             <NftItem img={img7}   number={198} price={9.5}  passRef = {Row2Ref} />
             <NftItem img={img8}   number={123} price={5.5}  passRef = {Row2Ref} />
             <NftItem img={img9}   number={235} price={3.5} passRef = {Row2Ref} /> 
            <NftItem img={img10}   number={765} price={4.5}   passRef = {Row2Ref}/>
      </Row>
    </Section>
  )
}
export default Showcase