import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Router } from "../router/Router";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Messages from "../utils/Messages";
import { isValidEmail } from "../utils/Formatter";

import Error from "../components/Error";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cgu: false,
  });
  const initialErrors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cgu: "",
  };
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    if (token) navigate(Router.Account);
  });

  const handleInput = (event) => {
    const target = event.target;
    setInputs({
      ...inputs,
      [target.id]: target.id === "cgu" ? !inputs.cgu : target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let tempErrors = {};

    if (!inputs.firstName) {
      tempErrors.firstName = Messages.firstName.required;
    }
    if (!inputs.lastName) {
      tempErrors.lastName = Messages.lastName.required;
    }
    if (!inputs.email) {
      tempErrors.email = Messages.email.required;
    } else if (!isValidEmail(inputs.email)) {
      tempErrors.email = Messages.email.badFormat;
    }
    if (!inputs.password) {
      tempErrors.password = Messages.password.required;
    } else if (inputs.password.length < 8) {
      tempErrors.password = Messages.password.min;
    }
    if (!inputs.cgu) {
      tempErrors.cgu = Messages.cgu.required;
    }

    if (Object.keys(tempErrors).length) {
      setErrors(tempErrors);
    } else {
      axios
        .post("http://localhost:3030/api/v1/users/register", {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          password: inputs.password,
        })
        .then((response) => {
          navigate(Router.Login);
        })
        .catch((error) => {
          tempErrors.email = error.response.data.message;
          setErrors(tempErrors);
        });
    }
  };

  return (
    <Container>
      <Main>
        <Wrapper>
          <Title>S'enregistrer</Title>
          <Form method="post" onSubmit={onSubmit}>
            <FormGroup>
              <Column>
                <Input
                  type="text"
                  placeholder="Prénom"
                  id="firstName"
                  onChange={handleInput}
                  hasError={errors.firstName}
                />
                {errors.firstName ? <Error message={errors.firstName} /> : null}
              </Column>
              <Column>
                <Input
                  type="text"
                  placeholder="Nom"
                  id="lastName"
                  onChange={handleInput}
                  hasError={errors.lastName}
                />
                {errors.lastName ? <Error message={errors.lastName} /> : null}
              </Column>
            </FormGroup>
            <FormGroup>
              <Column>
                <Input
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  onChange={handleInput}
                  hasError={errors.email}
                />
                {errors.email ? <Error message={errors.email} /> : null}
              </Column>
              <Column>
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  id="password"
                  onChange={handleInput}
                  hasError={errors.password}
                />
                {errors.password ? <Error message={errors.password} /> : null}
              </Column>
            </FormGroup>
            <FormGroup>
              <Column>
                <Checkbox
                  type="checkbox"
                  id="cgu"
                  checked={inputs.cgu}
                  onChange={handleInput}
                />
                <FormLabel htmlFor="cgu">
                  J'accepte les conditions générales d'utilisations
                </FormLabel>
                {errors.cgu ? <Error message={errors.cgu} /> : null}
              </Column>
            </FormGroup>
            <Agreement>
              En créant un compte, je consens au traitement de mes données
              personnelles conformément à la{" "}
              <AgreementStrong>politique de confidentialité</AgreementStrong>
            </Agreement>
            <FormWrapper>
              <Button type="submit">S'enregistrer</Button>
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
  margin: 20px 0 0 0;
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

const FormLabel = styled.label``;

const Column = styled.div`
  width: 100%;
  margin: 10px 0 0 0;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  font-family: inherit;
  border: 1px solid ${(props) => (props.hasError ? "red" : "black")};
  outline: none;
`;

const Checkbox = styled.input``;

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
