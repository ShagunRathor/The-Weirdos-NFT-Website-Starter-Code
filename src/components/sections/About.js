import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'

const Section =styled.div`
min-height:100vh;
width:100%;
background-color:#202020;
display:flex;
justify-content:center;
align-items:center;
position:relative;
font-size:1.5rem;
`
const Container = styled.div`
width:75%;
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
const Title= styled.h2`
font-size:${props =>props.theme.fontxxl};
text-transform:capitalize;
color:${props=> props.theme.body};
align-self:flex-start;
margin-left:60px;
margin-right:-1rem;
margin-bottom:30rem;
width:150rem;
`
const SubText= styled.p`
margin-left:-500px;
margin-right:100px;
margin:top:400px;
margin-bottom:50px;
color:#ffffff;
text-align:left;
display:flex;
flex-direction:column;
font-size:2rem;
height:15rem;
`
const SubTextLight= styled.p`
font-size:29px;
margin-top:400px;
margin-left:-600px;
margin-bottom:50px;
margin-right:150px;
color:grey;
height:100%;
text-align:left;
`

const About = () => {
  return (
    <Section id="about">
   <Container>
      <Box><Carousel /></Box>
      <Box>
       <Title>
       Welcome To The Weirdos Club.
       </Title>
       <SubText>
       The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
       </SubText>
       <SubTextLight>
       With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
       </SubTextLight>
      </Box>
     </Container>
    </Section>
  )
}

export default About