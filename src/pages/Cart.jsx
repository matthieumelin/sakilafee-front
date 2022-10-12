import React from "react";
import { Link } from "react-router-dom";

import { Add, Remove } from "@mui/icons-material";

import styled from "styled-components";

import Announcement from "../components/Announcement.component";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";

import { useSelector, useDispatch } from "react-redux";
import { Router } from "../router/Router";
import { setCart } from "../redux/reducers";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);

  const getSumPrice = () => {
    return cart.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);
  };

  const handleQuantity = (action, item) => {
    const newCart = [...cart];
    const lastItemIndex = newCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (lastItemIndex !== -1) {
      const currentItem = newCart[lastItemIndex];
      const newItemCopy = { ...currentItem };

      switch (action) {
        case "add":
          if (currentItem.quantity < item.maxStock) {
            newItemCopy.quantity += 1;
            newCart.splice(lastItemIndex, 1, newItemCopy);
          }
          break;
        case "remove":
          if (currentItem.quantity > 1) {
            newItemCopy.quantity -= 1;
            newCart.splice(lastItemIndex, 1, newItemCopy);            
          } else {
            newCart.splice(currentItem, 1);
            sessionStorage.setItem("cart", JSON.stringify(newCart));
          }
          break;
        default:
          break;
      }
      dispatch(setCart(newCart));
    }
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <Announcement />
        {cart.length ? (
          <Wrapper>
            <Title>Mon panier</Title>
            <Top>
              <TopButton to={Router.ProductList} type="filled">
                Continuer mes achats
              </TopButton>
              <TopTexts>
                <TopText>Articles ({cart.length})</TopText>
              </TopTexts>
            </Top>
            <Bottom>
              <Info>
                {cart &&
                  cart.map((item, index) => {
                    return (
                      <Product key={index}>
                        <ProductDetail>
                          <Image src={item.img} />
                          <Details>
                            <ProductGroup>
                              <Strong>Product:</Strong> {item.name}
                            </ProductGroup>
                            <ProductGroup>
                              <Strong>Catégorie:</Strong> {item.category}
                            </ProductGroup>
                            <ProductGroup>
                              <Strong>Taille:</Strong> {item.size}
                            </ProductGroup>
                            <ProductGroup>
                              <Strong>Couleur:</Strong>
                              <ProductColor color={item.color.value} />
                            </ProductGroup>
                          </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <Add
                              onClick={() => handleQuantity("add", item)}
                              style={{ cursor: "pointer" }}
                            />
                            <ProductAmount>{item.quantity}</ProductAmount>
                            <Remove
                              onClick={() => handleQuantity("remove", item)}
                              style={{ cursor: "pointer" }}
                            />
                          </ProductAmountContainer>
                          <ProductPrice>€ {item.price}</ProductPrice>
                        </PriceDetail>
                      </Product>
                    );
                  })}
              </Info>
              <Summary>
                <SummaryTitle>Résumé de la commande</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Articles</SummaryItemText>
                  <SummaryItemPrice>{getSumPrice()} €</SummaryItemPrice>
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
`;

const TopButton = styled(Link)`
  padding: 10px;
  font-family: inherit;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
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
    margin: 20px 0 0 0;
    flex-direction: row;
  }
`;

const Info = styled.div`
  flex: 3;
  margin: 30px 0 0 0;
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

const Strong = styled.strong``;

const ProductGroup = styled.div``;

const ProductColor = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid
    ${(props) => (props.color.includes("white") ? "black" : null)};
  margin: 5px 0 0 0;

  @media screen and (min-width: 1024px) {
    margin: 10px 0 0 0;
  }
`;

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
