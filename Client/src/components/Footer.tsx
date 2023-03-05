import React from "react";
import styled from "styled-components";
import Logo from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>Partners</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Billing Query</li>
      </ul>
      <ul>
        <li>Partners</li>
        <li>Contact us</li>
        <li>Billing Query</li>
        <li>About us</li>
      </ul>
      <ul>
        <li>Partners</li>
        <li>Billing Query</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #0c0c0c;
  max-width: 100%;
  color: white;
  padding-inline: 10%;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    /* background-color: white; */
    max-width: 250px;
  }
  ul {
    list-style: none;
    li {
      margin: 20px;
      cursor: pointer;
    }
  }
`;

export default Footer;
