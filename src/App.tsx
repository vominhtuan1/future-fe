import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import CartItem from "./components/ui/CarItem/CarItem";
import WishList from "./components/ui/WishList/WishList";
import AboutCard from "./components/ui/Strengths/AboutCard";
function App() {
  return (
    <div className="px-[75px]">
      <AboutCard icon="lock" title="Safe Delivery">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has
      </AboutCard>
    </div>
  );
}

export default App;
