import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import CartItem from "./components/ui/CarItem/CarItem";
import WishList from "./components/ui/WishList/WishList";
import ProductCard from "./components/ui/ProductCard/product-card";
function App() {
  return (
    <div>
      <CartItem></CartItem>
    </div>
  );
}

export default App;
