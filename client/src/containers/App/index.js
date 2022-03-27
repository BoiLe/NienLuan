// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import usestyles from "./Styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme";
import Home from "../HomeContainer.js";
import Login from "../LoginContainer.js";
import Register from "../RegisterContainer.js";

export default function App() {
  // const dispatch = useDispatch();
  // dispatch(action.getProduct.getProductRequest());
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
