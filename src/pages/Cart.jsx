import React from "react";

import { Add, Remove } from "@mui/icons-material";

import styled from "styled-components";

import Announcement from "../components/Announcement.component";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";

import { useSelector } from "react-redux";
import { Router } from "../router/Router";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.user.cart);
  return (
    <Container>
      <Navbar />
      <Main>
        <Announcement />
        {cart.length ? (
          <Wrapper>
            <Title>Mon panier</Title>
            <Top>
              <TopButton type="filled">Continuer mes achats</TopButton>
              <TopTexts>
                <TopText>Articles (2)</TopText>
                <TopText>Votre liste d'envies (0)</TopText>
              </TopTexts>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                    <Details>
                      <ProductName>
                        <b>Product:</b> JESSIE THUNDER SHOES
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> 93813718293
                      </ProductId>
                      <ProductSize>
                        <b>Size:</b> 37.5
                      </ProductSize>
                      <ProductColor color="black" />
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>2</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
                <Product>
                  <ProductDetail>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                    <Details>
                      <ProductName>
                        <b>Product:</b> HAKURA T-SHIRT
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> 93813718293
                      </ProductId>
                      <ProductSize>
                        <b>Size:</b> M
                      </ProductSize>
                      <ProductColor color="gray" />
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>1</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ 20</ProductPrice>
                  </PriceDetail>
                </Product>
              </Info>
              <Summary>
                <SummaryTitle>Résumé de la commande</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Articles</SummaryItemText>
                  <SummaryItemPrice>80€</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Frais de livraison</SummaryItemText>
                  <SummaryItemPrice>5.90€</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Réduction</SummaryItemText>
                  <SummaryItemPrice>-5.90€</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>80€</SummaryItemPrice>
                </SummaryItem>
                <Button>Passer commande</Button>
              </Summary>
            </Bottom>
          </Wrapper>
        ) : (
          <NoItem>
            <NoItemTitle>Votre panier est vide pour le moment</NoItemTitle>
            <NoItemLink to={Router.ProductList}>
              Continuer mes achats
            </NoItemLink>
          </NoItem>
        )}
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.main``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  padding: 0 20px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px 15px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin: 0 0 20px 0;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-family: inherit;
  border: none;
  width: 100%;
  box-sizing: border-box;
  text-transform: uppercase;
  cursor: pointer;
`;

const NoItem = styled.div`
padding: 30px 0;
`;

const NoItemTitle = styled.h2`
text-align: center;
`;

const NoItemLink = styled(Link)`
  background-color: #e4c581;
  padding: 15px 35px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  align-items: center;
  display: block;
  margin: 0 auto;
  width: max-content;
`;
