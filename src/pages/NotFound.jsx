import React from "react";

import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import { Router } from "../router/Router";

import SadFairy from "../assets/sad-fairy.png";

export default function NotFound() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Content>
          <Wrapper>
            <Left>
              <Title>Oups!</Title>
              <Description>
                Vérifiez que l'URL saisie ne contient pas d'erreur.
              </Description>
              <BackLink to={Router.Home}>Allez à la page d'accueil</BackLink>
            </Left>
            <Right>
              <Image src={SadFairy} />
            </Right>
          </Wrapper>
        </Content>
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.main``;

const Title = styled.h2`
  margin: 0 0 20px 0;
  font-size: 5rem;
`;

const Content = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div`
justify-content: center;
display: flex;
@media screen and (min-width: 768px) {
  align-items:center;
}
`;

const Left = styled.div``;
const Right = styled.div`
display: none;

@media screen and (min-width: 768px) {
  display: block;
}
`;
const Image = styled.img`
object-fit: cover;
display: block;
max-width:100%;
`;

const Description = styled.p``;

const BackLink = styled(Link)`
  background-color: black;
  color: white;
  padding: 6px 10px;
  text-decoration: none;
  display: block;
  width: max-content;
  font-weight: 500;
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    color: black;
    border: 2px solid black;
    background-color: transparent;
  }
`;
