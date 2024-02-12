import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc1,disc, title } = props;
  return (
    <Container>
        <span className='green'><Icon/></span>
        <h1>{title}</h1>
        <p>{disc1}</p>
        <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 10rem;
    @media(max-width: 840px){
        padding: 3rem;     
            }
    text-align: center;
    
    span{
        font-size: 4rem;
        margin-top:-122px;
        position:absolute;
        @media(max-width: 840px){
            margin-top:-65px;
            }
    }
    
    h1{
        font-size: 3.2rem;
        margin-top:-50px;
        @media(max-width: 840px){
            font-size: 3.2rem;
            margin-top:-20px;   
        }
    }

    p{
        font-size: 17px;
        line-height:25px;
        margin-top:20px;
        @media(max-width: 840px){
            font-size: 10px;
           line-height:20px;
           margin-top:5px;     
        }
    }
`