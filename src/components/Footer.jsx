import React from "react";
import { Link } from "react-router-dom";
import { Router } from "../router/Router";

import { Facebook, Instagram, MailOutline, Phone } from "@mui/icons-material";

import styled from "styled-components";

import LogoImage from "../assets/logo.png";
import { Colors } from "../utils/style/Colors";

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo src={LogoImage} alt="Logo de Saki Lafée" />
        <Desc>
          Saki Lafée brode et pesonnalise toutes vos envies pour vous ou pour
          offrir.
        </Desc>
        <Socials>
          <SocialsItem>
            <SocialsLink
              href="https://www.facebook.com/sakilafee59"
              target="_blank"
              color="#3B5999"
            >
              <Facebook />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://www.instagram.com/sakilafee59/"
              target="_blank"
              color="#E4405F"
            >
              <Instagram />
            </SocialsLink>
          </SocialsItem>
        </Socials>
      </Left>
      <Wrapper>
        <Center>
          <Title>Liens utiles</Title>
          <List>
            <ListItem>
              <ListLink to={Router.Home}>Accueil</ListLink>
            </ListItem>
            <ListItem>
              <ListLink to={Router.ProductList}>Produits</ListLink>
            </ListItem>
            <ListItem>
              <ListLink to={Router.Contact}>Contact</ListLink>
            </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +33 6 65 35 07 66
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} /> thara063@yahoo.fr
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.img`
  display: block;
  max-width: 100%;
  width: 100px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Socials = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
`;
const SocialsItem = styled.li``;
const SocialsLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (min-width: 1024px) {
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      transform: scale(1.05);
    }
  }
`;

const Center = styled.div`
  padding: 20px;
  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

const Title = styled.h3`
  margin: 0 0 20px 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ListLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${Colors.goldOpacity};

  @media screen and (min-width: 1024px) {
    background-color: inherit;
    width: 300px;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    margin: 20px 0;
    display: flex;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 200px;
  max-width: 200px;
  display: block;
`;
