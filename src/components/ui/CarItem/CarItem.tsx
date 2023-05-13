import React, { useState } from "react";
import { CircleMinus } from "../../icon";
import { CirclePlus } from "../../icon";
import QuantityBtn from "../../form/button/quantity-btn";

interface Props {
  count?: number;
}
const CartItem = ({ count }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
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
        {/* <div className="border-2 border-slate-400 ">
          <button onClick={handleDecrease} className="rounded-full w-7 h-5">
            <CircleMinus></CircleMinus>
          </button>
          {countNumber}
          <button onClick={handleIncrease} className="rounded-full w-7 h-5">
            <CirclePlus></CirclePlus>
          </button>
        </div> */}
        <QuantityBtn quantity={quantity} onChange={handleQuantityChange} />
        <p>$ 75.00</p>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
