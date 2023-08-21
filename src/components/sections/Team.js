import React from 'react'
import styled from 'styled-components'


import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import ConfettiComponent from '../Confetti';


const Section = styled.section`
height:100rem;;
width:120rem;
background-color:#ffffff;
position:relative;

`
const Title = styled.h1`
font-size:${(props) => props.theme.fontxxl};
text-transform:capitalize;
color:#202020;
justify-content:center;
align-items:center;
border-bottom:2px solid #202020;
width:fit-content;
margin-left:58rem;
`

const Container = styled.div`
width:75%;
margin:2rem auto;
display:grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
justify-items: center;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
`

const Item = styled.div`
width:calc(20rem - 4vw);
padding:1rem 0;
color: black;
margin:2rem 1rem;
position:relative;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
boder:2px solid black;
border-radius:20px;
transition:all 0.3s ease ;
backdrop-filter:blur(4px);
z-index:5;


&:hover{
  img{
    transform:translateY(-2rem) scale(1.2);
  }
}

`
const ImageContainer = styled.div`
  width:15rem !important;
  height:15rem !important;
  margin: 0 auto;
  background-color:#202020;
  border-radius:20px;
  cursor:pointer;
  

  img{
    width:100%;
    height:100%;
  }
  `
const Name = styled.h2`
font-size:${props => props.theme.fontxl};
display:flex;
align-items:center;
justify-content:center;
text-transform:uppercase;
color:#202020;
margin-top:1rem;
`

const Position = styled.h2`
font-size:${props => props.theme.fontlg};
display:flex;
align-items:center;
justify-content:center;
text-transform:capitalize;
color:#202020;
margin-top:1rem;
font-weight:600;
`


const MemberComponent = ({img, name=" ", position=" "}) =>{
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}
const Team = () => {
  return (
   <Section id="team">
    <ConfettiComponent />
    <Title>Team</Title>
    <Container>
   <MemberComponent img={img1} name="Rohit Khanna" position="Founder" />  
    <MemberComponent img ={img2} name="Karan Joshi" position="Co-Founder" />
   <MemberComponent img={img3}  name="Siddharth Mehta" position="Director" />
   <MemberComponent img={img4}  name="Rohit Malhotra" position="Manager" />
   <MemberComponent img={img5} name="Rajiv Kapoor" position="Artist"  />
   <MemberComponent img={img6} name="Priya Verma" position="Social-Media-Manager"  />
   <MemberComponent img={img7}  name="Swati Singhania" position="Blockchain Specialist" />
   <MemberComponent img={img8}  name="Ananya Mishra" position="Web3 Developer" />
   <MemberComponent img={img9}  name="Kavita Rawat" position="Graphic Designer" />
   
    </Container>
   </Section>
  )
}

export default Team