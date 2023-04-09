import React, { useState } from "react";
import CircleMinus from "../../icon/circle-minus";
import CirclePlus from "../../icon/circle-plus";

interface Props {
  quantity: number;
  onChange: (value: number) => void;
}

export default function QuantityBtn({ quantity, onChange }: Props) {
  const handleChangeQuantity = (type: "plus" | "minus") => {
    if (type === "minus") {
      if (quantity > 1) {
        onChange(quantity - 1);
      }
    } else {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="relative flex items-center py-2 px-4 gap-x-9 border-[1px] border-black w-fit select-none">
      <CircleMinus
        onClick={() => handleChangeQuantity("minus")}
        className="cursor-pointer"
      />
      <span className="absolute text-body-1 left-1/2 -translate-x-[50%]">
        {quantity}
      </span>
      <CirclePlus
        onClick={() => handleChangeQuantity("plus")}
        className="cursor-pointer"
      />
    </div>
  );
}
