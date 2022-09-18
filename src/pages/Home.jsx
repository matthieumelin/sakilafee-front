import React from "react";

import styled from "styled-components";

import Announcement from "../components/Announcement.component";
import Categories from "../components/Categories.component";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";
import Newsletter from "../components/Newsletter.component";
import Products from "../components/Products.component";
import Slider from "../components/Slider.component";

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