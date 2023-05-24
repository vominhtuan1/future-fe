import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import OrderHistory from "./pages/order-history";
import Addresses from "./pages/addresses";
import Login from "./pages/login";
import ContactUs from "./components/ui/contact-us";
import Register from "./components/ui/register/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="addresses" element={<Addresses />} />
      </Route>
    </Routes>
  );
}

export default App;
