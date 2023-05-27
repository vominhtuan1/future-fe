import React, { useEffect, useState } from "react";
import { userApi } from "../api/user.api";
import { useParams } from "react-router-dom";
import WishList from "../components/ui/WishList/WishList";

export default function WishListPage() {
  const [wishlist, setWishlist] = useState<FavoriteProduct[]>();
  /* This is a test for wishlist item, which will be deleted after complete redux store */
  const test: FavoriteProduct = {
    _id: "645e02347c79ac6e52aa4eb2",
    name: "Thú bông Pokemon ham ngủ Kabigon Snorlax",
    price: 129000,
    thumbnail: "./footer2.png",
    isStock: true,
  };
  const { id } = useParams();
  const handleGetWishlist = async () => {
    if (id) {
      const data = await userApi.getWishlist();
      setWishlist(data);
    }
  };

  useEffect(() => {
    handleGetWishlist();
  }, []);
  return (
    <div>
      <h2 className="flex items-center justify-center text-3xl my-[30px]">
        Wishlist
      </h2>
      <div className="m-[30px]">
        <header className="mx-[30px] p-2 grid grid-cols-10 font-bold text-center text-heading-7 leading-[35px] text-dark-slate-gray">
          <h3 className="col-span-5">Product</h3>
          <h3 className="col-span-2">Stock</h3>
          <h3 className="col-span-3">Action</h3>
        </header>
        <div>
          {wishlist?.map((item) => (
            <WishList product={item} key={item._id}></WishList>
          ))}
          {/*This is a test for wishlist item, which will be deleted after complete redux store*/}
          <WishList product={test}></WishList>
        </div>
      </div>
    </div>
  );
}
