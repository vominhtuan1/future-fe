import React from "react";

interface Props {
  children?: React.ReactNode;
  // type bên dưới là để chọn background cho button
  type: "green" | "wheat" | "black" | "gray" | "avatar" | "notbutton";
  image?: string;
  onClick?: () => void;
  className?: string;
}

const CircleBtn = ({ type, image, className, children, onClick }: Props) => {
  const handleBackground = () => {
    switch (type) {
      case "green":
        return "bg-lime-700";
      case "black":
        return "bg-black";
      case "wheat":
        return "bg-wheat";
      case "gray":
        return "bg-gray-200";
      case "notbutton":
        return "bg-gray-100";
    }
  };
  return (
    <>
      {type === "notbutton" ? (
        <button
          className={`${handleBackground()} ${className} w-14 h-14 rounded-full flex justify-center items-center`}
        >
          {children}
        </button>
      ) : type !== "avatar" ? (
        <button
          className={`${handleBackground()} ${className} w-10 h-10 rounded-full flex justify-center items-center`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button className={`w-10 h-10 rounded-full`}>
          <img src={image} alt="avatar" className="rounded-full" />
        </button>
      )}
    </>
  );
};

export default CircleBtn;
