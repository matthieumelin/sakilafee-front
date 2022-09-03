import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Router } from "../router/Router";

import { Add, Remove } from "@mui/icons-material";

import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import { shallowEqual, useSelector } from "react-redux";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedProduct = useSelector(
    (state) =>
      state.products.items.find((item) => {
        return item.id === id;
      }),
    shallowEqual
  );

  useEffect(() => {
    if (!selectedProduct) {
      return navigate(Router.ProductList);
    }
  }, [selectedProduct]);

  return (
    <Container>
      <Navbar />
      <Main>
        <Announcement />
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.main``;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 50px;
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    height: 90vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    padding: 0px 50px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
