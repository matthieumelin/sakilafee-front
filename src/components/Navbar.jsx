import React, { useState } from "react";
import { Close, Menu, Person, ShoppingCart } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { Router } from "../router/Router";

import styled from "styled-components";

import LogoImage from "../assets/logo.png";

import { useSelector } from "react-redux";

export default function Navbar() {
  const token = useSelector((state) => state.user.token);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo src={LogoImage} alt="Logo de Saki Lafée" />
        <Toggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close /> : <Menu />}
        </Toggle>
      </Wrapper>
      <Links isOpen={isOpen}>
        <LinksItem>
          <LinksLink to={Router.Home}>Accueil</LinksLink>
        </LinksItem>
        <LinksItem>
          <LinksLink to={Router.ProductList}>Produits</LinksLink>
        </LinksItem>
        <LinksItem>
          <LinksLink to={Router.Contact}>Contact</LinksLink>
        </LinksItem>
      </Links>
      <Right>
        <RightItem>
          <RightLink to={Router.Cart}>
            <ShoppingCart />
            Panier
          </RightLink>
        </RightItem>
        <RightItem>
          <RightLink to={token ? Router.Profil : Router.Login}>
            <Person />
            {token ? "Mon compte" : "Se connecter"}
          </RightLink>
        </RightItem>
      </Right>
    </Container>
  );
}

const Container = styled.nav`
  padding: 20px;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 100px;
  display: block;
`;

const Toggle = styled.div`
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Links = styled.ul`
  list-style: none;
  overflow: hidden;
  padding: 0;
  margin: 10px 0 0 0;
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  -webkit-transition: margin 0.5s, max-height 0.5s;
  -moz-transition: margin 0.5s, max-height 0.5s;
  -ms-transition: margin 0.5s, max-height 0.5s;
  -o-transition: margin 0.5s, max-height 0.5s;
  transition: margin 0.5s, max-height 0.5s;

  @media screen and (min-width: 1024px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 300px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
  }
`;

const LinksItem = styled.li``;

const LinksLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
`;

const Right = styled.ul`
  padding: 0;
  list-style: none;

  @media screen and (min-width: 1024px) {
    position: absolute;
    right: 20px;
    display: flex;
    gap: 20px;
  }
`;
const RightItem = styled.li``;
const RightLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: inherit;
`;
