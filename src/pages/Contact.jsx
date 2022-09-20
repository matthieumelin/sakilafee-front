import React, { useState } from "react";

import styled from "styled-components";

import Navbar from "../components/Navbar.component";
import Footer from "../components/Footer.component";

import Messages from "../utils/Messages";

import axios from "axios";

import { Router } from "../router/Router";

import { isValidEmail } from "../utils/Formatter";

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let tempErrors = {};

    if (!inputs.name) {
      tempErrors.name = Messages.name.required;
    }
    if (!inputs.email) {
      tempErrors.email = Messages.email.required;
    } else if (!isValidEmail(inputs.email)) {
      tempErrors.email = Messages.email.badFormat;
    }
    if (!inputs.phone) {
      tempErrors.phone = Messages.phone.required;
    }
    if (!inputs.comment) {
      tempErrors.comment = Messages.comment.required;
    }

    if (Object.keys(tempErrors).length) {
      setErrors(tempErrors);
    } else {
      axios
        .post("http://localhost:3030/api/v1/contact", {
          name: inputs.name,
          email: inputs.email,
          phone: inputs.phone,
          comment: inputs.comment,
        })
        .then((response) => {})
        .catch((error) => {
          tempErrors.email = error.response.data.message;
          setErrors(tempErrors);
        });
    }
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <Form onSubmit={onSubmit}>
          <FormTitle>Nous contacter</FormTitle>
          <FormGroupWrapper>
            <FormGroup>
              <FormLabel htmlFor="name">Nom</FormLabel>
              <FormInput
                onChange={handleInput}
                value={inputs.name}
                type="text"
                id="name"
                name="name"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormInput
                onChange={handleInput}
                value={inputs.email}
                type="email"
                id="email"
                name="email"
              />
            </FormGroup>
          </FormGroupWrapper>
          <FormGroup>
            <FormLabel htmlFor="phone">Numéro de téléphone</FormLabel>
            <FormInput
              onChange={handleInput}
              value={inputs.phone}
              type="tel"
              id="phone"
              name="phone"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="comment">Commentaire</FormLabel>
            <FormTextarea
              onChange={handleInput}
              value={inputs.comment}
              rows={3}
              id="comment"
              name="comment"
            />
          </FormGroup>
          <FormGroup>
            <FormButton type="submit">Envoyer</FormButton>
          </FormGroup>
        </Form>
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.main`
  margin: 0 auto;
  max-width: 768px;
  padding: 0 20px;
`;

const Form = styled.form`
  flex-direction: column;
  display: flex;
  gap: 20px;
`;
const FormTitle = styled.h1`
  margin: 0 0 30px 0;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    bottom: -10px;
    background-color: lightgray;
    height: 0.5px;
    width: 50px;
  }
`;
const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FormLabel = styled.label`
  font-weight: 500;
  margin: 0 0 10px 0;
`;
const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;
  outline: none;
  padding: 10px;
  font-family: inherit;
`;
const FormTextarea = styled.textarea`
  min-height: 100px;
  resize: vertical;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;
  outline: none;
  font-family: inherit;
  padding: 10px;
`;
const FormButton = styled.button`
  padding: 10px;
  width: max-content;
  background-color: black;
  color: white;
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
`;
