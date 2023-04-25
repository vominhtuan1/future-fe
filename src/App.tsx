import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import DescriptionReview from "./components/ui/description-review/descriptionReview";
import { Header } from "./components/ui/header";
import { Footer } from "./components/ui/footer";

function App() {
  return (
    <div>
      <Header></Header>
      <DescriptionReview></DescriptionReview>
      <Footer></Footer>
    </div>
  );
}

export default App;
