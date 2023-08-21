import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
 justify-content:center;
 min-height:100m%
`;

const Title=styled.h2`
font-size:${props =>props.theme.fontxxl};
text-transform:capiltalize;
width:80%;
color:${props=> props.theme.text};
align-self:flex-start;

span{
    text-transform:uppercase;
    font-family:'Akaya Telivigala ', cursive;
}
.text-1{
    color:blue;
}
.text-2{
    color:orange;
}
.text-3{
    color:green;
}
`;

const SubTitle =styled.h3`
font-size:31px;
text-transform: capitalize;
color:${props => 'rgba(${props =>props.theme.text},0.6)'};
font-weight:600;
margin-bottom:1rem;
width:80%;
align-self:flex-start;

`

const ExploreButton = styled(Button)`
  font-size: 16px; 
  padding:10px 20px;
  margin:30rem;

`;

const TypeWriterText = () => {
  return (
   <Container>
   <Title>
    Discover A New Era Of Cool
    <Typewriter
    options={{
        autoStart:true,
        loop:true,
    }}
  onInit={(typewriter) => {
    typewriter
    .typeString('<span class="text-1">NFTs..</span>')
    .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">Collectible Items..</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">Ape Killers! </span>')
      .pauseFor(2000)
      .deleteAll()
      .start()
  }}
/>

<SubTitle>Bored Of Apes? Try Something New</SubTitle>

</Title>

<ExploreButton text="Explore" link="#about" />

</Container>

   
  )
}

export default TypeWriterText