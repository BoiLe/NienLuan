// eslint-disable-next-line no-unused-vars
import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import usestyles from "./Styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme";
import Home from "../HomeContainer.js";
import Login from "../../components/Login";
import Register from "../../components/register";
import Admin from "../../components/Admin/page/Home";
import List from "../../components/Admin/page/Product/List.js";
import ProductDetail from "../../components/product/ProductDetail";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <ToastContainer />
        <AnimatePresence>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="admin">
                <Route index element={<Admin />} />
                {/* <Route path=":userid" element={<Admin />} /> */}
                <Route path="product" element={<List />} />
                <Route path="product/:id" element={<ProductDetail />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </AnimatePresence>
        x
      </Router>
    </ThemeProvider>
  );
}
