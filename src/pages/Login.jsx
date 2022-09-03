import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Router } from "../router/Router";

import styled from "styled-components";


import Back from "../components/Back";

export default function Login() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (token) navigate(Router.Account);
  });

  return (
    <Container>
      <Main>
        <Wrapper>
          <Back route={Router.Home} />
          <Title>Se connecter</Title>
          <Form>
            <Input placeholder="E-mail" />
            <Input placeholder="Mot de passe" />
            <Button>Se connecter</Button>
            <CustomLink to={Router.Forgot}>Mot de passe oublié ?</CustomLink>
            <CustomLink to={Router.Register}>
              Créer un nouveau compte
            </CustomLink>
          </Form>
        </Wrapper>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main``;

const Wrapper = styled.div`
  padding: 30px;
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
  width: 100%;
  box-sizing: border-box;
  margin: 10px 0;
  padding: 10px;
  font-family: inherit;
  border: 1px solid black;
  outline: none;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 10px 0;
  font-family: inherit;
  text-transform: uppercase;
`;

const CustomLink = styled(Link)`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
`;
