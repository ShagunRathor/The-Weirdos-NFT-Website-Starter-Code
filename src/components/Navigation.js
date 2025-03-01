import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'

const Section = styled.section`
    width:100vw;
    background-color: ${props => props.theme.body};
    `

    const NavBar = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
  
   

    width:85%;
    height: ${props => props.theme.navHeight};
    margin:0 auto;

  `
  const Menu =styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    list-style:none;

@media (max-width:64em) {
  position:fixed;
  top:${props =>props.theme.navHeight};
  left:0;
  right:0;
  bottom:0;
  width:100vw;
  height:${props => `calc(100 - ${props.theme.navHeight})`};
  z-index:50;
  background-color:${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
backdrop-filter:blur(2px);

transform:translateY(0 100%);

flex-direction:column;
justify-content:center;

}



  `

const MenuItem = styled.li`
   margin:0 1rem;
   font-size:29px;
   color: ${props => props.theme.text};
   cursor:pointer;
   
`


const Navigation = () => {

const [click, setClick] = useState(false);
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior:'smooth',
      block:'start',
      inline:'nearest',

    })
  }
  return (
   

    <Section>
    <NavBar>
      <Logo />
      
    <Menu>
        <MenuItem onClick={() => scrollTo('home')} >Home</MenuItem>
        <MenuItem onClick={() => scrollTo('about')} >About</MenuItem>
        <MenuItem onClick={() => scrollTo('roadmap')} >Roadmap</MenuItem>
        <MenuItem onClick={() => scrollTo('showcase')} >Showcase</MenuItem>
        <MenuItem onClick={() => scrollTo('team')} >Team</MenuItem>
        <MenuItem onClick={() => scrollTo('faq')} >Faq</MenuItem>
      </Menu>
     <Button text="Connect Wallet" link="https://google.com" />
    </NavBar>
    </Section>
  )
}

export default Navigation