import React from "react";
import styled from "styled-components";

export default function Announcement() {
  return <Container>Livraison gratuite sur les commandes de plus de 50 €</Container>;
}

const Container = styled.div`
  height: 30px;
  background-color: rgba(249, 238, 160, 0.5);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
`;
