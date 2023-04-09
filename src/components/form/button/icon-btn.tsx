import React from "react";
import Trash from "../../icon/trash";
import Heart from "../../icon/heart";

interface Props {
  type: "wishList" | "trash";
  onClick?: () => void;
}

export default function IconBtn({ type, onClick }: Props) {
  const handleCSS = () => {
    switch (type) {
      case "wishList":
        return "border-[1px] border-light-gray";
      case "trash":
        return "bg-scarlet";
    }
  };

  return (
    <button onClick={onClick} className={`p-3 ${handleCSS()}`}>
      {type === "trash" ? <Trash /> : <Heart />}
    </button>
  );
}
