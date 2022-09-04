import React from "react";

import styled from "styled-components";

export default function Errors({ errors }) {
  return (
    <Container>
      {errors &&
        errors.map((error, index) => {
          return <Message key={index}>{error}</Message>;
        })}
    </Container>
  );
}

const Container = styled.ul`
  color: red;
  padding: 0;
  margin: 0;
`;
const Message = styled.li``;
