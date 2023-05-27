import React from "react";
import { RecycleIcon } from "../../icon";
import { formatPrice } from "../../../utils/string-utils";
import Button from "../../form/button/button";
import { userApi } from "../../../api/user.api";

interface Props {
  product: FavoriteProduct;
}

const WishList = ({ product }: Props) => {
  const handleDelete = () => {
    userApi.deleteWishlistItem(product._id);
  };

  const handleAddToCart = () => {
    console.log("product._id: ", product._id);
  };

  return (
    <div className="m-[30px] p-2 flex w-full">
      <div className="flex items-center justify-center flex-1">
        <div
          onClick={handleDelete}
          className="flex items-center p-[13px] cursor-pointer bg-gray-100 justify-center mr-8"
        >
          <RecycleIcon></RecycleIcon>
        </div>
        <div className="flex gap-x-5">
          <img
            className="object-cover object-center w-[120px] h-[120px]"
            src={product.thumbnail}
            alt="img"
          />
          <div className="w-[280px] space-y-[15px]">
            <h2 className="font-bold leading-9 capitalize text-heading-7">
              {product.name}
            </h2>
            <p className="text-xl font-bold text-green-800">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        {product.isStock ? (
          <p className="font-bold text-green-700">Còn hàng</p>
        ) : (
          <p className="font-bold text-red-accent">Hết hàng</p>
        )}
      </div>
      <div className="flex items-center justify-center flex-1">
        <Button
          variant="teritary"
          title="Thêm vào giỏ hàng"
          className="px-7 py-4"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};
export default WishList;
