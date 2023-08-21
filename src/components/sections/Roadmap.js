import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'


const Section = styled.section`
min-height:100vh;
width:100vw;
background-color:#ffffff;
position:relative;
`
const Title = styled.h1`
font-size:${(props) => props.theme.fontxxl};
text-transform:capitalize;
color:${(props) => props.theme.text};
justify-content:center;
align-items:center;
border-bottom:2px solid black;
width:fit-content;
margin-left:58rem;
`
const Container = styled.div`
width:70%;
height:200vh;
background-color:${(props) => props.theme.body};
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;
position:relative;
`
const SvgContainer = styled.div`
 display:flex;
 justify-content:center;
 align-items:center
`
const Items = styled.ul`
list-style:none;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#ffffff;

&>*:nth-of-type(2n +1){
  justify-content:start;

  div{
    border-radius:50px 0 50px 0;
    text-align:right;

  }
  p{
    border-radius:40px 0 40px 0;
  }
}
&>*:nth-of-type(2n){
  justify-content:end;


  div{
    border-radius:0 50px 0 50px;
    text-align:left;
  }
  p{
    border-radius:0 40px 0 40px;
  }
}
`
const Item = styled.li`
width:100%;
height:100%;
display:flex;
font-size:24px;
`
const ItemContainer = styled.div`
  width:40%;
  height:fit-content;
  padding:1rem;
  border:3px solid #202020;
`

const Box = styled.p`
height:fit-content;
background-color:${props =>props.theme.carouselColor};
color:${(props) => props.theme.text};
padding:2.5rem;
position:relative;
border:1px solid #202020;
`
const SubTitle = styled.span`
display:block;
font-size:${props =>props.theme.fontxl};
text-transform:capitalize;
color:${(props) => props.theme.text};
margin-bottom:2.5rem;
`;
const Text = styled.span`
display:block;
font-size:${props =>props.theme.fontsm};
text-transform:capitalize;
color:${(props) => props.theme.text};

font-weight:400;
margin:0.5rem 0;
`;


const RoadMapItem = ({title, subtext,}) =>{

  return(
    <Item >
      <ItemContainer>
     <Box>
      <SubTitle>{title}</SubTitle>
      <Text>{subtext}</Text>
     </Box>
      </ItemContainer>
    </Item>
  )
}
const Roadmap = () => {

  return (
  <Section id="roadmap">
    <Title>Roadmap</Title>
<Container>
<SvgContainer>
  <DrawSvg />
</SvgContainer>
<Items>
  <Item>&nbsp;</Item>  
  <RoadMapItem  title="Grand Opening"    subtext= " Outline the main goals and objectives you hope to achieve with this grand opening. This might include aspects like increasing user registrations, generating buzz around specific NFT drops, or promoting featured artists." />
  <RoadMapItem  title="Great Benefits"   subtext= "Remember to make your roadmap clear, concise, and visually appealing, perhaps through the use of graphics or charts to illustrate your timeline and goals. Regularly update your roadmap as you progress and achieve milestones to keep your community informed and engaged." />
  <RoadMapItem  title="Early Access"     subtext= " transparency and open communication are key during the early access phase. Engage with your users, address their concerns, and adapt your roadmap based on their feedback to ensure a successful transition to the full launch of your NFT/Art website." />
  <RoadMapItem  title="New Merch"        subtext= "Remember that this roadmap is a general template. Depending on your specific goals and circumstances, you may need to tailor it to your unique situation. Additionally, be sure to involve your team, artists, and community in the planning and execution of your merchandise launch to maximize its success." />
  <RoadMapItem  title="Holders Ranking"  subtext= "Remember to adapt this roadmap to your specific project and goals. The key is to provide a clear and realistic timeline for the development and implementation of your holder ranking system while demonstrating your commitment to user feedback and improvement." />
</Items>
</Container>
    
  </Section>
  )
}

export default Roadmap