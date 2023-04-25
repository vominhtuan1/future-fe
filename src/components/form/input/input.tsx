import clsx from "clsx";
import React from "react";

interface Props {
  variation?: "outlined" | "filled";
  placehodler?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
}

export default function Input({
  variation = "filled",
  placehodler = "aA",
  label,
  helperText,
  error,
  className,
}: Props) {
  return (
    <div className="pr-[10px]">
      {label && (
        <h3
          className={clsx(
            "text-heading-6 mb-[15px] mt-[10px]",
            error && "text-red-500"
          )}
        >
          {label}
        </h3>
      )}
      <input
        type="text"
        placeholder={placehodler}
        className={clsx(
          "px-5 py-[22px] text-body-1 leading-5 outline-none border-[1px]",
          variation === "filled" && "bg-white border-white",
          variation === "outlined" && "border-light-gray bg-transparent",
          error && "border-red-500",
          className && className
        )}
      />
      {helperText && (
        <p className={clsx("text-body-3", error && "text-red-500")}>
          {helperText}
        </p>
      )}
    </div>
  );
}
