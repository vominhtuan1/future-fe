import clsx from "clsx";
import React from "react";

interface Props {
  placehodler?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
}

export default function TextArea({
  placehodler = "aA",
  label,
  helperText,
  error,
  className,
}: Props) {
  return (
    <div>
      {label && (
        <h3
          className={clsx("text-heading-6 mb-[15px]", error && "text-red-500")}
        >
          {label}
        </h3>
      )}
      <textarea
        placeholder={placehodler}
        className={clsx(
          "px-5 py-[22px] text-body-1 resize-none leading-5 outline-none border-[1px] border-light-gray bg-transparent",
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
