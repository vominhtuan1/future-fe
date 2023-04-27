import React, { useEffect, useState } from "react";
import Button from "../../form/button/button";
import Bike from "../../icon/bike";
import CreditCard from "../../icon/credit-card";
import { formatPrice } from "../../../utils/string-utils";
import PaymentMethodBtn from "../../form/button/payment-method-btn";
import OrderChekoutCard from "../card/order-checkout-card";
import { orderApi } from "../../../api/order.api";
import { createSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface Product {
  id: number;
  name: string;
  price: number;
}

const cartProds = [
  {
    _id: "6444d4f8d51d38f91006c7b0",
    name: "sed eum tenetur asperiores corporis vero odio",
    price: 12000,
    imgUrl: "./chair1.jpg",
    quantity: 2,
  },
  {
    _id: "6444d271aeeb343923303a95",
    name: "sed ros tenetur shan corporis vero odio",
    price: 20000,
    imgUrl: "./chair2.jpg",
    quantity: 1,
  },
  {
    _id: "6444d557f398f8b9b2fe4a88",
    name: "qikl ros oksuej shan isk vero odio",
    price: 24000,
    imgUrl: "./chair3.jpg",
    quantity: 3,
  },
];

const FormCheckout = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const paymentMethods = [
    {
      title: "COD",
      icon: (
        <Bike
          className={
            paymentMethod === "COD" ? "text-wheat" : "text-philippine-gray"
          }
        />
      ),
    },
    {
      title: "VNPay",
      icon: (
        <CreditCard
          className={
            paymentMethod === "VNPay" ? "text-wheat" : "text-philippine-gray"
          }
        />
      ),
    },
  ];

  const handleClickPaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = async () => {
    try {
      toast.loading("Placing order ...", { id: "toastCreatOrder" });
      const body: ICreateOrder = {
        address: "6444e1985e256d1e8182a2ee",
        orderItems: cartProds.map((prod) => ({
          product: prod._id,
          price: prod.price,
          quantity: prod.quantity,
        })),
      };
      await orderApi.createOrder(body);
      toast.dismiss("toastCreatOrder");
      toast.success("Place order successfully");

      navigate({
        pathname: "/order-history",
        search: createSearchParams({
          status: "pending",
        }).toString(),
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    const tempSubTotal = cartProds.reduce(
      (sum, prod) => sum + prod.price * prod.quantity,
      0
    );
    setSubTotal(tempSubTotal);
    setTotal(tempSubTotal + 15000);
  }, []);

  return (
    <div>
      <h3 className="mb-[100px] flex justify-center text-heading-3 font-black">
        Checkout
      </h3>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="col-span-2">
          <h2 className="mb-10 font-bold text-heading-6">Your Order</h2>

          <div className="mb-[50px] space-y-4 border-2 border-light-gray p-6">
            {cartProds.map((prod) => (
              <OrderChekoutCard
                key={prod.name}
                imgUrl={prod.imgUrl}
                name={prod.name}
                price={prod.price}
                quantity={prod.quantity}
              />
            ))}
          </div>
          <h2 className="mb-10 font-bold text-heading-6">Payment Method</h2>
          <div>
            <div className="flex gap-x-5">
              {paymentMethods.map((method) => (
                <PaymentMethodBtn
                  key={method.title}
                  icon={method.icon}
                  title={method.title}
                  active={paymentMethod === method.title}
                  onClick={handleClickPaymentMethod}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-scarlet px-7 py-[34px] h-fit">
          <div className="flex justify-between mb-[30px]">
            <h3 className="text-heading-7 leading-[35px] font-bold">
              Your Address
            </h3>
            <Button
              title="Change address"
              variant="secondary"
              className="px-2 text-heading-9"
            />
          </div>
          <div className="mb-[50px] space-y-4">
            <h5 className="text-heading-7 leading-[30px]">Nguyen Van An</h5>
            <h5 className="text-heading-7 leading-[30px]">0987654321</h5>
            <p className="text-philippine-gray">
              khu pho 6, Linh Trung, Thu Duc, Thanh pho Ho Chi Minh
            </p>
          </div>

          <h3 className="text-heading-7 leading-[35px] font-bold mb-[30px]">
            Order Info
          </h3>
          <div className="space-y-[25px] mb-[25px]">
            <div className="flex justify-between">
              <h5 className="text-heading-7 leading-[35px] text-philippine-gray">
                Subtotal
              </h5>
              <span className="text-body text-heading-7 leading-[30px] font-semibold">
                {formatPrice(subTotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <h5 className="text-heading-7 leading-[35px] text-philippine-gray">
                Shipping
              </h5>
              <span className="text-body text-heading-7 leading-[30px] font-semibold">
                {formatPrice(15000)}
              </span>
            </div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="flex justify-between">
              <h5 className="text-heading-7 leading-[35px] text-philippine-gray">
                Total
              </h5>
              <span className="text-body text-heading-7 leading-[30px] font-semibold">
                {formatPrice(total)}
              </span>
            </div>
          </div>

          <Button
            onClick={handlePlaceOrder}
            variant="primary"
            title="Place Order"
            className="text-heading-8 leading-[27px] font-semibold py-[14px] w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default FormCheckout;
