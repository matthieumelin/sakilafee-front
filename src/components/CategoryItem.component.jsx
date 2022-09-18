import React from "react";
import styled from "styled-components";

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Voir la collection</Button>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  height: 50vh;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  white-space: nowrap;
`;

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-family: inherit;
  border: 1px solid white;
  text-transform: uppercase;
  margin: 0 auto;
  display: block;

  @media screen and (min-width: 1024px) {
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      transform: scale(1.05);
    }
  }
`;
