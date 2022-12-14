import React, { useEffect } from "react";

import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./router/Router";

import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./redux/reducers";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Forgot from "./pages/Forgot";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Logout from "./pages/Logout";

export default function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);

  useEffect(() => {
    if (
      userData &&
      userData.accessTokenExpires < new Date(Date.now()).getTime()
    ) {
      dispatch(setUserData());

      localStorage.removeItem("userData");
    }
  }, [userData,]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Router.Logout} element={<Logout />} />
          <Route path={Router.NotFound} element={<NotFound />} />
          <Route path={Router.Account} element={<Account />} />
          <Route path={Router.Contact} element={<Contact />} />
          <Route path={Router.Forgot} element={<Forgot />} />
          <Route path={Router.Product} element={<Product />} />
          <Route path={Router.ProductList} element={<ProductList />} />
          <Route path={Router.Cart} element={<Cart />} />
          <Route path={Router.Register} element={<Register />} />
          <Route path={Router.Login} element={<Login />} />
          <Route index path={Router.Home} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
