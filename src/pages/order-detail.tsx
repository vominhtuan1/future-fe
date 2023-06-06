import React, { useEffect, useState } from "react";

import { orderApi } from "../api/order.api";
import OrderChekoutCard from "../components/ui/card/order-checkout-card";
import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState<IOrder>();

  const handlerFetchOrder = async (orderId: string) => {
    try {
      const response = await orderApi.getOrderById(orderId);
      console.log("response: ", response);
      setOrder(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    if (id) {
      handlerFetchOrder(id);
    }
  }, []);

  return (
    <div className="px-[75px] pt-[45px] pb-[100px]">
      <h3 className="mb-[100px] text-center text-heading-3">Order Details</h3>
      <div className="grid grid-cols-10 gap-x-10">
        <div className="col-span-3 space-y-5">
          <h4 className="text-heading-8 underline decoration-emerald-700">{`- ID: ${order?.shortId}`}</h4>
          <h4 className="text-heading-8 underline decoration-emerald-700">{`- Người mua hàng: ${order?.address.receiver}`}</h4>
          <h4 className="text-heading-8 underline decoration-emerald-700">{`- Địa chỉ nhận hàng: ${order?.address.specificAddress}, ${order?.address.ward}, ${order?.address.district}, ${order?.address.province}`}</h4>
          <h4 className="text-heading-8 underline decoration-emerald-700">{`- Số điện thoại: ${order?.address.phone}`}</h4>
          <h4 className="text-heading-8 underline decoration-emerald-700">{`- Phương thức thanh toán: ${order?.paymentMethod}`}</h4>
          <h4 className="text-heading-8 underline decoration-emerald-700">
            {`- Thời gian tạo: ${
              order ? new Date(order?.createdAt).toLocaleDateString() : ""
            }`}
          </h4>
        </div>
        <div className="col-span-7 space-y-5">
          {order &&
            order.orderItems.map((orderItem) => (
              <div
                className="className=relative w-full p-5 space-y-4 border-2 border-dark-slate-gray"
                key={orderItem._id}
              >
                <OrderChekoutCard
                  imgUrl={orderItem.product.thumbnail}
                  name={orderItem.product.name}
                  price={orderItem.price}
                  quantity={orderItem.quantity}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
