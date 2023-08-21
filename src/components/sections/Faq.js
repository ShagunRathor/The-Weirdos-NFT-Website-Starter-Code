import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Section = styled.section`
min-height:100vh;
width:100vw;
background-color:#202020;
position:relative;
color:#ffffff;

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`
const Title = styled.h1`
font-size:${(props) => props.theme.fontxxl};
text-transform:uppercase;
color:${(props) => props.theme.body};
width:fit-content;
margin:1rem auto;
` ;

const Container = styled.div`
width:75%;
margin:2rem auto;

display:flex;
justify-content:space-between;
align-content:center;
`

const Box = styled.div`
width:45%;
height:40;

`

const Faq = () => {

  const ref = useRef (null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect (() => {
  

  let element = ref.current;

  ScrollTrigger.create({
    trigger:element,
    start:'top top',
    end:'bottom top',
  pin:true,
  pinSpacing:false,
  scrub:true,
  //markers:true,

  })

  return () => {
   ScrollTrigger.killAll();
  };
 }, [])
  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>
      <Container>
<Box>
  <Accordion title="WHERE CAN I VIEW MY NFTS?" >
  Choose a title and accompanying text that aligns with the branding and user experience of your NFT/art website. Ensure that the instructions are easy to follow, especially for users who may be new to the world of NFTs.

  </Accordion>
  <Accordion title="WHAT IS THE METAVERSE?" >
  The Metaverse is a collective virtual shared space where users from all corners of the globe can interact, create, and engage in ways that were once considered the realm of science fiction. It represents the convergence of augmented reality, virtual reality, blockchain technology, and the limitless possibilities of the internet.
  </Accordion>
  <Accordion title="WHY DO WE NEED ROYALTIES?" >
  royalties are a fundamental component of the evolving NFT and digital art space. They empower artists by providing a consistent income stream, fostering fairness, transparency, and trust, and incentivizing ongoing creativity. By recognizing the value of royalties, we support the flourishing of a vibrant and sustainable digital art ecosystem that benefits both artists and art enthusiasts alike.
  </Accordion>
  
</Box>
<Box>
<Accordion title="HOW CAN I USE MY NFT?" >
"Congratulations on owning an NFT from our collection! Your NFT is more than just a digital artwork; it's a gateway to a world of possibilities. You can proudly display your NFT in your digital art gallery, share it on social media to showcase your unique ownership, or even trade it with other collectors in the NFT marketplace. Additionally, some NFTs come with exclusive perks, such as access to virtual events, limited edition merchandise, or even real-world experiences
  </Accordion>
  <Accordion title="WHAT ARE THE WEIRDOS?" >
  In the captivating realm of art and non-fungible tokens (NFTs), "The Weirdos" stand as a distinctive and enchanting creation. They are not just digital artworks but a vibrant tapestry of imagination and creativity.

"The Weirdos" represent a diverse collective of artists who explore the uncharted territories of expression. Through a fusion of digital art, blockchain technology, and boundless innovation, they craft a universe where the peculiar is celebrated, and the unusual is embraced.
  </Accordion>
  <Accordion title="WHAT IS THE FUSION PROCESS?" >
"The fusion process is the heart and soul of our artistry here at [Your Website Name]. It's the magical alchemy where creativity meets technology. Our artists take inspiration from various sources, blending traditional artistic techniques with cutting-edge digital tools. This fusion allows us to create unique and captivating NFTs that transcend the boundaries of the physical and digital worlds. With painstaking attention to detail, we meld colors, shapes, and ideas, resulting in one-of-a-kind pieces of digital art. Each fusion is a story waiting to be told, an emotion waiting to be felt, and an experience waiting to be shared. Join us on this artistic journey, where fusion transforms imagination into digital masterpieces."
  </Accordion>
</Box>
      </Container>
    </Section>
  )
}

export default Faq