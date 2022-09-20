import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { Settings, ShoppingCart } from "@mui/icons-material";

import { useSelector } from "react-redux";

export default function Sidebar() {
  const userData = useSelector((state) => state.user.data);

  return (
    <Container>
      <Title>Bienvenue, {userData.firstName} !</Title>
      <Description>Nous sommes heureux de vous voir ici</Description>
      <Menu>
      <MenuItem>
          <MenuLink to="/">
            <MenuLinkIcon>
              <ShoppingCart />
            </MenuLinkIcon>
            Historique des commandes
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/">
            <MenuLinkIcon>
              <Settings />
            </MenuLinkIcon>
            Mes paramètres
          </MenuLink>
        </MenuItem>
      </Menu>
    </Container>
  );
}
const Container = styled.aside`
  padding: 0 20px;
`;
const Title = styled.h1``;
const Description = styled.p`
padding: 0;
`;
const Menu = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MenuItem = styled.li``;
const MenuLink = styled(Link)`
  background-color: #e4c581;
  padding: 15px 35px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
`;
const MenuLinkIcon = styled.div`
  width: 50px;
`;
