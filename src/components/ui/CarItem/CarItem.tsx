import React, { useState } from "react";
import { CircleMinus } from "../../icon";
import { CirclePlus } from "../../icon";

interface Props {
  count?: number;
}
const CartItem = ({ count }: Props) => {
  const [countNumber, setCountNumber] = useState<number>(count || 1);

  const handleDecrease = () => {
    setCountNumber(countNumber - 1);
  };
  const handleIncrease = () => {
    setCountNumber(countNumber + 1);
  };
  return (
    <div className="w-[800px] h-[100px] bg-slate-50 m-[30px] p-2 flex flex-1">
      <div className="flex">
        <div className="w-[80px] h-[80px] flex">
          <img
            className="inline-block object-cover"
            src="./chair1.jpg"
            alt="img"
          />
        </div>
        <div>
          <h2>Complete set of sofa, pillows and bed sheets</h2>
          <p className="text-green-600 font-bold text-xl">$ 75.00</p>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 p-10">
        <div className="border-2 border-slate-400 ">
          {/* giảm */}
          <button onClick={handleDecrease} className="rounded-full w-7 h-5">
            <CircleMinus></CircleMinus>
          </button>
          {countNumber}
          {/* tăng */}
          <button onClick={handleIncrease} className="rounded-full w-7 h-5">
            <CirclePlus></CirclePlus>
          </button>
        </div>
        <p>$ 75.00</p>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
