import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Router } from "../router/Router";

import styled from "styled-components";

import Back from "../components/Back.component";
import Error from "../components/Error.component";

import Messages from "../utils/Messages";

import axios from "axios";

import { setUserData } from "../redux/reducers";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const initialErrors = {
    email: "",
    password: "",
  };
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    if (userData) {
      navigate(Router.Account);
    }
  });

  const handleInput = (event) => {
    const id = event.target.id;
    setInputs({
      ...inputs,
      [id]: id === "remember" ? !inputs.remember : event.target.value,
    });
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
      axios
        .post("http://localhost:3030/api/v1/users/login", {
          email: inputs.email,
          password: inputs.password,
        })
        .then((response) => {
          const data = response.data.data;

          if (inputs.remember) {
            localStorage.setItem("userData", JSON.stringify(response.data.data));
          } else {
            sessionStorage.setItem("userData", JSON.stringify(response.data.data));
          }

          dispatch(setUserData(data));
          navigate(Router.Account);
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
                hasError={errors.email}
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
                hasError={errors.password}
              />
              {errors.password ? <Error message={errors.password} /> : null}
            </FormGroup>
            <FormGroup>
              <Column>
                <Checkbox
                  type="checkbox"
                  id="remember"
                  checked={inputs.remember}
                  onChange={handleInput}
                />
                <FormLabel htmlFor="remember">Se souvenir de moi</FormLabel>
                {errors.cgu ? <Error message={errors.cgu} /> : null}
              </Column>
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

const FormLabel = styled.label``;

const Column = styled.div`
  width: 100%;
  margin: 10px 0 0 0;
`;

const Checkbox = styled.input``;

const Input = styled.input`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  margin: 10px 0;
  padding: 10px;
  font-family: inherit;
  border: 1px solid ${(props) => (props.hasError ? "red" : "black")};
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
