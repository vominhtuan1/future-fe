import React from "react";
import { RecycleIcon } from "../../icon";
const WishList = () => {
  return (
    <div className="w-[800px] h-[100px] bg-slate-50 m-[30px] p-2 flex ">
      <div className="flex items-center w-[500px]">
        <div className="flex items-center p-1 w-[30px] h-[30px] bg-gray-100 justify-center mx-8">
          <RecycleIcon></RecycleIcon>
        </div>
        <div className="flex">
          <div className="w-[80px] h-[80px] flex ">
            <img
              className="inline-block object-cover "
              src="./chair1.jpg"
              alt="img"
            />
          </div>
          <div className="w-[220px]">
            <h2>Complete set of sofa, pillows and bed sheets</h2>
            <p className="text-green-800 font-bold text-xl">$ 75.00</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 p-10">
        <p className="text-green-700 font-bold bg-gray-100">In Stock</p>
        <button className="bg-black text-white p-1">Add to Cart</button>
      </div>
    </div>
  );
};
export default WishList;
