import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 0 20px 20px 20px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
