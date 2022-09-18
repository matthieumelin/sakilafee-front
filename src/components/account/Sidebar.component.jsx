import React from "react";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/logo.png";

import styled from "styled-components";

import { Colors } from "../../utils/style/Colors";

import { Settings, ShoppingCart } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <Container>
      <Logo alt="Saki Lafée" src={LogoImage} />
      <Menu>
        <MenuItem>
          <MenuLink to="/">
            <MenuLinkIcon>
              <Settings />
            </MenuLinkIcon>
            Mes paramètres
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/">
            <MenuLinkIcon>
              <ShoppingCart />
            </MenuLinkIcon>
            Historique des commandes
          </MenuLink>
        </MenuItem>
      </Menu>
    </Container>
  );
}
const Container = styled.nav`
  padding: 20px;
`;
const Logo = styled.img`
  width: 60px;
  display: block;
`;
const Menu = styled.ul`
  list-style: none;
  padding: 20px 0 0 0;
  display:flex;
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
