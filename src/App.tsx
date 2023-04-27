import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import OrderHistory from "./pages/order-history";
import Addresses from "./pages/addresses";
import ZaloPayResult from "./pages/zalo-pay-result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="addresses" element={<Addresses />} />
        <Route path="zalo-pay-result" element={<ZaloPayResult />} />
      </Route>
    </Routes>
  );
}

export default App;
