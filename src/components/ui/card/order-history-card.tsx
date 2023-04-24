import React from "react";
import { convertPrice } from "../../../utils/string-utils";
import Button from "../../form/button/button";

interface Props {
  order: IOrderHistory;
}

export default function OrderHistoryCard({ order }: Props) {
  return (
    <div className="relative w-full p-5 space-y-4 border-2 border-dark-slate-gray">
      <div className="flex justify-between">
        <h4 className="text-heading-8">{order.shortId}</h4>
        <h4 className="text-heading-8">
          {new Date(order.createdAt).toLocaleDateString()}
        </h4>
      </div>
      <div className="flex gap-x-4">
        <img src="./chair2.jpg" className="w-32 h-32" />
        <div className="flex flex-col justify-evenly">
          <h4 className="font-bold text-heading-7">
            {order.firstProduct.name}
          </h4>
          <span className="text-philippine-gray">
            x{order.firstProduct.quantity}
          </span>
          <p className="font-bold text-heading-7 text-dark-slate-gray">
            {convertPrice(order.firstProduct.price)}
          </p>
        </div>
      </div>
      {order.orderItemsLength > 1 && (
        <p className="text-heading-8">
          and{" "}
          <span className="font-bold">
            {order.orderItemsLength - 1} other
            {order.orderItemsLength - 1 > 1 ? " products" : " product"}
          </span>
        </p>
      )}
      <Button
        className="absolute px-5 py-2 right-5 bottom-5"
        title="See Detail"
        variant="secondary"
      />
    </div>
  );
}
