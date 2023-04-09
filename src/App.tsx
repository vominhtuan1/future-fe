import React from "react";
import BannerHome from "./components/ui/banner/banner-home";
import CategoryCard from "./components/ui/cateogry/category-card";
import Input from "./components/form/input/input";

function App() {
  return (
    <div>
      <BannerHome />
      <div className="grid grid-cols-2 mt-6 gap-x-5">
        <CategoryCard />
        <CategoryCard />
      </div>
      <Input variation="filled" />
    </div>
  );
}

export default App;
