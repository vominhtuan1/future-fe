import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import OrderHistory from "./pages/order-history";
import Addresses from "./pages/addresses";
import Checkout from "./pages/checkout";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import ZaloPayResult from "./pages/zalo-pay-result";
import { productDetailsApi } from "./api/product-details.api";

function App() {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;

  const handle = async () => {
    const res = await productDetailsApi.getProductById(
      "6444a144cdcd8f39b4f5dfba"
    );
    console.log(res);
  };

  useEffect(() => {
    handle();
  }, []);

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="zalo-pay-result" element={<ZaloPayResult />} />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          className: "z-[500]",
        }}
      />
    </>
  );
}

export default App;
