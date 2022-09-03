import React from "react";

import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Form>
          <FormTitle>Nous contacter</FormTitle>
          <FormGroupWrapper>
            <FormGroup>
              <FormLabel htmlFor="name">Nom</FormLabel>
              <FormInput type="text" id="name" name="name" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormInput type="email" id="email" name="email" />
            </FormGroup>
          </FormGroupWrapper>
          <FormGroup>
            <FormLabel htmlFor="phone">Numéro de téléphone</FormLabel>
            <FormInput type="tel" id="phone" name="phone" />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="comment">Commentaire</FormLabel>
            <FormTextarea rows={3} id="comment" name="comment" />
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
border:none;
font-family: inherit;
text-transform: uppercase;
cursor: pointer;
`;
