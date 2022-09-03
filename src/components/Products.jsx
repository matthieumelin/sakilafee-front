import React from "react";

import styled from "styled-components";

import Product from "./Product";

import { useSelector } from "react-redux";

export default function Products() {
  const categoryItems = useSelector((state) => state.products.categoryItems);
  const products = useSelector((state) => state.products.items);

  return ( 
    <Container>
      {products.filter((item) => item.category === categoryItems).map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;     
  gap: 10px;           
`;
