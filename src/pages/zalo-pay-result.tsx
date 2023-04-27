import React from "react";
import { Loading, PayOnline } from "../components/icon";

export default function ZaloPayResult() {
  return (
    <div className="px-[75px] ">
      <PayOnline height={300} className="mx-auto mt-[50px]" />
      <div className="mt-[50px] relative w-fit mx-auto">
        <h3 className="text-center text-heading-3">Processing</h3>
        <Loading
          height={56}
          className="absolute top-0 right-0 translate-x-full h-14"
        />
      </div>
      <p className="mt-4 text-center text-body-1 text-philippine-gray">
        we are checking your transaction status
      </p>
    </div>
  );
}
