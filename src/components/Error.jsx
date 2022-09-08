import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Error({ message }) {
  return (
    <Container>
      {message}
    </Container>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}

const Container = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: red;
`;
