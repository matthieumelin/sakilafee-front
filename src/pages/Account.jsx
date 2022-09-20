import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Router } from "../router/Router";

import styled from "styled-components";

import Sidebar from "../components/account/Sidebar.component";
import Navbar from "../components/Navbar.component";
import Footer from "../components/Footer.component";

export default function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);

  useEffect(() => {
    if (!userData) navigate(Router.Login);
  });

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

