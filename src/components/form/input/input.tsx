import clsx from "clsx";
import React from "react";

interface Props {
  variation: "outlined" | "filled";
}

export default function Input({ variation = "filled" }: Props) {
  return (
    <div>
      <label></label>
      <input
        type="text"
        placeholder="sldkfje"
        className={clsx(
          "px-5 py-[22px] text-body-1 leading-5 outline-none border-[1px]",
          variation === "filled" && "bg-white",
          variation === "outlined" && "border-"
        )}
      />
    </div>
  );
}
