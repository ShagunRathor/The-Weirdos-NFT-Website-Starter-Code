import React from 'react'
import styled from 'styled-components'


const Up = styled.div`
width:3rem;
height:3rem;

box-sizing:Lborder-box;
margin:0;
padding:0;
color:${props =>props.theme.text};
background-color:${props =>props.theme.text};
font-szie:${props =>props.theme.fontxl};
position:fixed;
right:1rem;
bottom:1rem;

cursor:pointer;

display:flex;
justify-content:center;
align-items:center;

border-radius:50%;
transition:all 0.2s ease;

border-left: 1rem solid transparent;
border-right: 1rem solid transparent;
border-bottom: 1.5rem solid red;

&:hover{
    transform:scale(1.2);
}
&:active{
    transform:scale(0.9);
}
`
const ScrollToTop = () => {
    const scrollToTop = () => {
        let element = document.getElementById("home");

        element.scrollIntoView({
          top: 0,
          behavior: 'smooth',
          block:'start',
          inline:'nearest',
        
    })
      };
     
  return (
    <Up onClick={scrollToTop}>
     
    </Up>
       
  )
}

export default ScrollToTop