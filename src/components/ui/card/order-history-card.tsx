import React from "react";
import { formatPrice } from "../../../utils/string-utils";
import Button from "../../form/button/button";
import OrderChekoutCard from "./order-checkout-card";
import { useNavigate } from "react-router-dom";

interface Props {
  order: IOrderHistory;
}

export default function OrderHistoryCard({ order }: Props) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full p-5 space-y-4 border-2 border-dark-slate-gray">
      <div className="flex justify-between">
        <h4 className="text-heading-8">{order.shortId}</h4>
        <h4 className="text-heading-8">
          {new Date(order.createdAt).toLocaleDateString()}
        </h4>
      </div>
      <OrderChekoutCard
        imgUrl={order.firstProduct.thumbnail}
        name={order.firstProduct.name}
        price={order.firstProduct.price}
        quantity={order.firstProduct.quantity}
      />
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
        onClick={() => navigate(`/order-history/${order._id}`)}
      />
    </div>
  );
}
