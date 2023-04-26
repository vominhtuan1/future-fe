import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import OrderHistory from "./pages/order-history";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order-history" element={<OrderHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
