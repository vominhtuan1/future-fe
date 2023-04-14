import React, { useState } from "react";
import CircleBtn from "../../form/button-circle/social-btn";
import CartIcon from "../../icon/cart";
import WhiteHeartIcon from "../../icon/white-heart";

interface Props {
  // children: React.ReactNode;
  sourceImage: string;
}

const ProductCard = ({ sourceImage }: Props) => {
  console.log(sourceImage);
  const [state, setState] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setState(true);
  };
  const handleMouseLeft = () => {
    setState(false);
  };
  return (
    <div
      className="flex relative rounded w-72 h-96 hover:cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeft}
    >
      <img
        src={sourceImage}
        alt="product"
        className="rounded-xl min-w-full min-h-full"
      />
      <div className="absolute top-5 right-3 flex justify-center items-center bg-red-600 w-11 h-6 text-white text-sm rounded-lg ">
        <div className="text-red">New</div>
      </div>
      {state ? (
        <div className="absolute inset-y-32 right-3">
          <CircleBtn
            type="black"
            className="mb-5 hover:bg-white transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
          >
            <WhiteHeartIcon />
          </CircleBtn>
          <CircleBtn
            type="wheat"
            className="hover:bg-white transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
          >
            <CartIcon />
          </CircleBtn>
        </div>
      ) : (
        <></>
      )}
      <div className="absolute bottom-4 left-4">
        <div className="flex justify-center items-center w-28 h-8 text-white bg-emerald-700 rounded-lg mb-3">
          Living Room
        </div>
        <div className="flex justify-center items-center w-64 h-12 bg-white rounded-lg ">
          <div className="mr-20 font-bold">Teak wood chair</div>
          <div className="text-green-700">$24</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
