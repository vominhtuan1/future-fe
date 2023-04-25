import React from "react";
import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
