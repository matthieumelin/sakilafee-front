import React from "react";

import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./router/Router";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Forgot from "./pages/Forgot";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
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
    </Provider>
  );
}
