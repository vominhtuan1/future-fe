import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import Input from "../../form/input/input";
import TextArea from "../../form/input/text-area";
import CircleBtn from "../../form/button-circle/social-btn";
import DeliveryIcon from "../../icon/delivery";
import StoreIcon from "../../icon/store";
import Button from "../../form/button/button";

interface Product {
  id: number;
  name: string;
  price: number;
}
const Checkout = () => {
  // ai làm với chekout thì chỗ dữ liệu chính là dữ liệu lấy từ api nha, ở đây mình lấy 1 dữ liệu thô
  const productInfo: Product[] = [
    { id: 1, name: "bàn", price: 10 },
    { id: 2, name: "ghế", price: 20 },
    // { id: 3, name: "ghế", price: 20 },
    // { id: 4, name: "ghế", price: 20 },
    // { id: 5, name: "ghế", price: 20 },
    // { id: 6, name: "ghế", price: 20 },
    // { id: 7, name: "ghế", price: 20 },
    // { id: 8, name: "ghế", price: 20 },
    // { id: 9, name: "ghế", price: 20 },
    // { id: 10, name: "ghế", price: 20 },
    // { id: 11, name: "ghế", price: 20 },
    // { id: 12, name: "bàn", price: 10 },
    // { id: 13, name: "bàn", price: 10 },
  ];
  const [stateSelector, setStateSelector] = useState(1);
  const setActiveSelector = (check: number) => {
    setStateSelector(check);
  };
  return (
    <div>
      <h3 className="h-[100px] flex justify-center text-heading-4 font-black">
        Checkout
      </h3>
      <div className="flex ml-10 mr-10">
        <div className="w-9/12 mr-[40px]">
          <h2 className="text-heading-5 h-[50px] font-bold flex items-center">
            Contact Information
          </h2>
          <div className="grid grid-cols-2 place-content-between">
            <div className="">
              <Input
                placehodler="Your first name here..."
                variation="outlined"
                label="First Name"
                className="w-full bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <Input
              placehodler="Your last name here..."
              variation="outlined"
              label="Last Name"
              className="w-full bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <Input
              placehodler="Your phone here..."
              variation="outlined"
              label="Phone"
              className="w-full bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <Input
              placehodler="Your email here..."
              variation="outlined"
              label="Email"
              className="w-full bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <h2 className="text-heading-5 h-[70px] font-bold flex items-center">
            Shipping Method
          </h2>
          <div>
            <div className="flex justify-between max-w-[370px]">
              <div
                className={`${
                  stateSelector === 1 && "border-emerald-700 bg-slate-200"
                } flex min-w-[178px] max-h-[70px] justify-center items-center border-2 cursor-pointer`}
                onClick={() => setActiveSelector(1)}
              >
                <CircleBtn
                  type={stateSelector === 1 ? "green" : "gray"}
                  className="mr-[10px]"
                >
                  <StoreIcon
                    color={stateSelector === 1 ? "#F8DFB6" : "#8F8F8F"}
                  />
                </CircleBtn>
                <span>Store</span>
              </div>
              <div
                className={`${
                  stateSelector === 2 && "border-emerald-700 bg-slate-200"
                } flex min-w-[178px] min-h-[70px] justify-center items-center border-2 cursor-pointer`}
                onClick={() => setActiveSelector(2)}
              >
                <CircleBtn
                  type={stateSelector === 2 ? "green" : "gray"}
                  className="mr-[10px]"
                >
                  <DeliveryIcon
                    color={stateSelector === 2 ? "#F8DFB6" : "#8F8F8F"}
                  />
                </CircleBtn>
                <span>Delivery</span>
              </div>
            </div>
            <div className="min-h-[70px] mt-[5px]">
              <label
                htmlFor="countries"
                className="block mb-2 text-heading-6 font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <TextArea
                label="Address"
                className="min-w-full"
                placehodler="Write your full address"
              />
            </div>
          </div>
        </div>
        <div className="w-1/4 h-96 bg-gray-100 flex flex-col justify-between">
          <h3 className="pt-[10px] pl-[10px] pr-[10px] h-[70px] text-heading-6 flex items-center">
            Your Order
          </h3>
          <div className="pt-[10px] pl-[10px] pr-[10px] overflow-auto h-[300px]">
            {productInfo.map((element) => {
              const price = element.price * element.id;
              return (
                <div key={element.id} className="flex justify-between">
                  <span className="overflow-hidden w-[100px]">
                    {element.name}
                  </span>
                  <span>{element.id}x</span>
                  <span className="font-bold">${price}</span>
                </div>
              );
            })}
          </div>
          <div className="p-[10px]">
            <div className="flex justify-between font-bold pb-[10px]">
              <span>Total</span>
              <span>$&ensp;10</span>
            </div>
            <Button
              type="primary"
              title="Place Order"
              className="w-full min-h-[56px] font-bold pl-[10px] pr-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
