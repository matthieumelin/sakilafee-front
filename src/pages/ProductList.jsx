import React, { useState } from "react";

import styled from "styled-components";

import Navbar from "../components/Navbar.component";
import Announcement from "../components/Announcement.component";
import Products from "../components/Products.component";
import Newsletter from "../components/Newsletter.component";
import Footer from "../components/Footer.component";

import { categories, productFilters } from "../data";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryItems } from "../redux/reducers";

export default function ProductList() {
  const categoryItems = useSelector((state) => state.products.categoryItems);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    color: productFilters.colors[0].name,
    size: productFilters.sizes[0],
  });

  const handleSelect = (event) => {
    const target = event.target;
    switch (target.id) {
      case "colors":
        setFilters({ ...filters, color: target.value });
        break;
      case "sizes":
        setFilters({ ...filters, size: target.value });
        break;
      case "prices":
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <Announcement />
        <Categories>
          <CategoriesList>
            {categories.map((cat) => {
              return (
                <CategoriesListItem
                  key={cat.id}
                  isActive={categoryItems === cat.title}
                  onClick={() => dispatch(setCategoryItems(cat.title))}
                >
                  <CategoriesListItemIcon>{cat.icon}</CategoriesListItemIcon>
                  <CategoriesListItemTitle>{cat.title}</CategoriesListItemTitle>
                </CategoriesListItem>
              );
            })}
          </CategoriesList>
        </Categories>
        <Title>Produits ({categoryItems})</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Produits filtrés par:</FilterText>
            <Select value={filters.color} onChange={handleSelect} id="colors">
              <Option disabled>Couleurs</Option>
              {productFilters.colors &&
                productFilters.colors.map((color, index) => {
                  return <Option key={`color_${index}`}>{color.name}</Option>;
                })}
            </Select>
            <Select value={filters.size} onChange={handleSelect} id="sizes">
              <Option disabled>Tailles</Option>
              {productFilters.sizes.map((size, index) => {
                return <Option key={index}>{size}</Option>;
              })}
            </Select>
          </Filter>
          <Filter>
            <FilterText>Filtré par:</FilterText>
            <Select
              value={productFilters.others[0]}
              onChange={handleSelect}
              id="prices"
            >
              {productFilters.others.map((other, index) => {
                return <Option key={index}>{other}</Option>;
              })}
            </Select>
          </Filter>
        </FilterContainer>
        <Products filters={filters} />
        <Newsletter />
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.main``;

const Title = styled.h2`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Categories = styled.section`
  margin: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const CategoriesListItem = styled.li`
  padding: 10px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: 0.2s;
  border: 2px solid transparent;

  ${(props) =>
    props.isActive
      ? `
      background-color: transparent;
    color: black;
    border: 2px solid black;`
      : `
      background-color: black;
      color: white;
      `}

  &:hover {
    transition: 0.2s;
    background-color: transparent;
    color: black;
    border: 2px solid black;
  }
`;

const CategoriesListItemTitle = styled.p`
  width: 180px;
`;

const CategoriesListItemIcon = styled.div``;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  font-family: inherit;
  outline: none;
  border: 1px solid black;
`;
const Option = styled.option``;
