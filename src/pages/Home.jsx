import React from "react";

import styled from "styled-components";

import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Main>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.main``;