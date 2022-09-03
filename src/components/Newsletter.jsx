import React from "react";
import { Send } from "@mui/icons-material";
import styled from "styled-components";

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Recevez les annonces de nos nouveaux produits.</Desc>
      <InputContainer>
        <Input placeholder="Votre email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 60vh;
  background-color: rgba(249, 238, 160, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Desc = styled.p`
  font-weight: 300;
  margin: 20px 0;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 90%;
  max-width: 425px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: 1px solid black;
  flex: 8;
  padding: 0 10px;
  font-family: inherit;
  outline: none;
`;

const Button = styled.button`
  flex: 1;
  border: 1px solid black;
  background-color: black;
  color: white;
  display: block;
  cursor: pointer;
`;
