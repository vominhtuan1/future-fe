import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import CartItem from "./components/ui/CarItem/CarItem";
import WishList from "./components/ui/WishList/WishList";
function App() {
  return (
    <div>
      <WishList></WishList>
    </div>
  );
}

export default App;
