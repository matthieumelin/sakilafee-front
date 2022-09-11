import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { ArrowBack } from "@mui/icons-material";

export default function Back({ route }) {
  return (
    <Container to={route}>
      <ArrowBack /> Retour
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  align-items: center;
  width: max-content;
  height: 24px;
  color: inherit;
  text-decoration: none;
  gap: 5px;
  font-weight: 400;
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;

  @media screen and (min-width: 1024px) {
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      background-color: black;
      color: white;
    }
  }
`;
