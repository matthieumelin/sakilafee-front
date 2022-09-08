import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Router } from "../router/Router";

import styled from "styled-components";

import Back from "../components/Back";

import Messages from "../utils/Messages";
import Error from "../components/Error";

export default function Login() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const initialErrors = {
    email: "",
    password: "",
  };
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    if (token) navigate(Router.Account);
  });

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let tempErrors = {};

    if (!inputs.email) {
      tempErrors.email = Messages.email.required;
    }
    // else if (!isValidEmail(inputs.email)) {
    //   tempErrors.email = Messages.email.badFormat;
    // }
    if (!inputs.password) {
      tempErrors.password = Messages.password.required;
    }
    //  else if (inputs.password.length < 8) {
    //   tempErrors.password = Messages.password.min;
    // }

    if (Object.keys(tempErrors).length) {
      setErrors(tempErrors);
    } else {
      console.log("ok");
    }
  };

  return (
    <Container>
      <Main>
        <Wrapper>
          <Back route={Router.Home} />
          <Title>Se connecter</Title>
          <Form method="post" onSubmit={onSubmit}>
            <FormGroup>
              <Input
                type="email"
                id="email"
                placeholder="E-mail"
                value={inputs.email}
                onChange={handleInput}
              />
              {errors.email ? <Error message={errors.email} /> : null}
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                id="password"
                placeholder="Mot de passe"
                value={inputs.password}
                onChange={handleInput}
              />
              {errors.password ? <Error message={errors.password} /> : null}
            </FormGroup>
            <FormGroup>
              <Button type="submit">Se connecter</Button>
            </FormGroup>
            <FormGroup>
              <CustomLink to={Router.Forgot}>Mot de passe oublié ?</CustomLink>
            </FormGroup>
            <FormGroup>
              <CustomLink to={Router.Register}>
                Créer un nouveau compte
              </CustomLink>
            </FormGroup>
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

const Main = styled.main`
max-width: 425px;
width: 100%;
margin: 0 20px;
`;

const Wrapper = styled.div`
  padding: 30px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
  margin: 20px 0 0 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin: 10px 0 0 0;
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
