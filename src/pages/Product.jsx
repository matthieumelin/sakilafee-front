import React, { useState } from "react";

import { Navigate, useParams, useNavigate } from "react-router-dom";
import { Router } from "../router/Router";

import { Add, Remove } from "@mui/icons-material";

import styled from "styled-components";

import Announcement from "../components/Announcement.component";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";
import Newsletter from "../components/Newsletter.component";

import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../redux/reducers";

import { Colors } from "../utils/Colors";

import { productFilters } from "../data";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === parseInt(id))
  );
  const cart = useSelector((state) => state.user.cart);

  const [size, setSize] = useState(productFilters.sizes[0]);
  const [color, setColor] = useState(productFilters.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (action) => {
    switch (action) {
      case "add":
        if (quantity < product.maxStock) {
          setQuantity(quantity + 1);
        }
        break;
      case "remove":
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
        break;
      default:
        break;
    }
  };

  const addToCart = (item) => {
    const newCart = [...cart];
    const lastItemIndex = newCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (lastItemIndex !== -1) {
      const currentItem = newCart[lastItemIndex];

      Object.freeze(currentItem);

      const newItemCopy = { ...currentItem };
      newItemCopy.size = size;
      newItemCopy.color = color;
      newItemCopy.quantity += quantity;

      newCart.splice(lastItemIndex, 1, newItemCopy);
    } else {
      const newItem = { ...item, size: size, color: color, quantity: quantity };
      newCart.push(newItem);
    }

    sessionStorage.setItem("cart", JSON.stringify(newCart));

    dispatch(setCart(newCart));

    navigate(Router.Cart);

    setQuantity(1);
  };

  if (!product) {
    return <Navigate to={Router.ProductList} />;
  }

  return (
    <Container>
      <Navbar />
      <Main>
        <Announcement />
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.name}</Title>
            <Desc>{product.description}</Desc>
            <Price>{product.price} €</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Couleur</FilterTitle>
                {productFilters.colors &&
                  productFilters.colors.map((item, index) => {
                    return (
                      <FilterColor
                        key={`color_${index}`}
                        color={item.value}
                        value={color.value}
                        onClick={() => setColor(item)}
                      />
                    );
                  })}
              </Filter>
              <Filter>
                <FilterTitle>Taille</FilterTitle>
                <FilterSize>
                  {productFilters.sizes &&
                    productFilters.sizes.map((size, index) => {
                      return (
                        <FilterSizeOption
                          key={`size_${index}`}
                          value={size}
                          onChange={() => setSize(size)}
                        >
                          {size}
                        </FilterSizeOption>
                      );
                    })}
                  <FilterSizeOption>XS</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("remove")}
                />
                <Amount>{quantity}</Amount>
                <Add
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("add")}
                />
              </AmountContainer>
              <Button onClick={() => addToCart(product)}>
                Ajouter au panier
              </Button>
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
    align-items: center;
    justify-content: center;
  }
`;

const ImgContainer = styled.div``;

const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  display: block;

  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`;

const InfoContainer = styled.div`
  padding: 10px;

  @media screen and (min-width: 1024px) {
    padding: 0px 50px;
  }
`;

const Title = styled.h1`
  font-weight: 400;
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
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  position: relative;

  &::before {
    width: 40px;
    height: 40px;
    border-radius: inherit;
    content: "";
    border: ${(props) =>
      props.color === props.value
        ? "2px solid black"
        : "2px solid transparent"};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const FilterSize = styled.select`
  font-family: inherit;
  margin-left: 10px;
  padding: 5px;
  outline: none;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  font-family: inherit;
`;
