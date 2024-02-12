import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          About <span className="green">Me</span>
        </h4>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"About Concilia"}
            disc1={`I am a skilled front-end web developer with expertise in React, JavaScript,WordPress,CSS,and HTML. I leverage these technologies to create visually appealing, responsive, and interactive web applications. My goal is to deliver seamless user experiences and bring designs to life through clean and efficient code..`}
            disc={`As a front-end web developer, I grasp UI and UX design to create visually appealing and user-friendly web experiences
            I have a basic comprehension of how digital marketing integrates into front-end web development
            `}
            />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0;
  height: 100vh;
  @media (max-width: 840px) {
    width: 100%;
  }

 h4{
  font-size: 40px;
  @media(max-width: 840px){
    font-size: 25px;
  }
  
 }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media(max-width: 840px){

  }
 
`;




