import React, { useEffect } from "react";
import { Router } from "../router/Router";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import styled from "styled-components";

import Back from "../components/Back.component";

export default function Forgot() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);

  useEffect(() => {
    if (userData) navigate(Router.Home);
  });

  return (
    <Container>
      <Main>
        <Wrapper>
          <Back route={Router.Login} />
          <Title>Mot de passe oublié</Title>
          <Form>
            <Input placeholder="E-mail" />
            <Button>Envoyer</Button>
          </Form>
        </Wrapper>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
`;

const Main = styled.main`
  max-width: 425px;
  width: 100%;
  margin: 0 20px;
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font-family: inherit;
  border: 1px solid black;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 10px 0 0 0;
  font-family: inherit;
  text-transform: uppercase;
`;

const CustomLink = styled(Link)`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
`;
