import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Shirts from "./pages/Shirts";
import Hoodies from "./pages/Hoodies";
import Joggins from "./pages/Joggins";
import Jeans from "./pages/Jeans";
import Cart from "./pages/Cart";
import Snikers from "./pages/Snikers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/snikers" element={<Snikers />} />
      <Route path="/category/hoodies" element={<Hoodies />} />
      <Route path="/category/shirts" element={<Shirts />} />
      <Route path="/category/joggins" element={<Joggins />} />
      <Route path="/category/jeans" element={<Jeans />} />
      <Route path="/category/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
