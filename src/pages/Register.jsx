import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Router } from "../router/Router";
import { useSelector } from "react-redux";

import styled from "styled-components";

export default function Register() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (token) navigate(Router.Account);
  });

  return (
    <Container>
      <Main>
        <Wrapper>
          <Title>S'enregistrer</Title>
          <Form>
            <FormGroup>
              <Input placeholder="Prénom" />
              <Input placeholder="Nom" />
            </FormGroup>
            <FormGroup>
              <Input placeholder="E-mail" />
              <Input placeholder="Mot de passe" />
            </FormGroup>
            <Agreement>
              En créant un compte, je consens au traitement de mes données
              personnelles conformément à la{" "}
              <AgreementStrong>politique de confidentialité</AgreementStrong>
            </Agreement>
            <FormWrapper>
              <Button>S'enregistrer</Button>
              <CustomLink to={Router.Login}>Je me connecte.</CustomLink>
            </FormWrapper>
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
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main``;

const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  max-width: 768px;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const FormGroup = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  font-family: inherit;
  border: 1px solid black;
`;

const Agreement = styled.span`
  margin: 10px 0px;
`;

const AgreementStrong = styled.strong``;

const Button = styled.button`
  border: none;
  margin: 10px 0 0 0;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;
`;

const CustomLink = styled(Link)`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
`;
