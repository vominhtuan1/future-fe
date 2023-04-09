import React from "react";

interface Props {
  type: "primary" | "secondary" | "teritary";
  title: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ type, title, className, onClick }: Props) {
  const handleBtnColor = () => {
    switch (type) {
      case "primary":
        return "bg-dark-slate-gray text-wheat";
      case "secondary":
        return "text-dark-slate-gray border-2 border-dark-slate-gray";
      case "teritary":
        return "bg-black text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`font-body ${handleBtnColor()} ${className}`}
    >
      {title}
    </button>
  );
}
