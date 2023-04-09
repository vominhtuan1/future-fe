import React from "react";
import Button from "../form/button/button";
import Input from "../form/input/input";

export default function Subcribe() {
  return (
    <div className="relative pt-[46px] pb-[75px] px-[60px] bg-scarlet">
      <div className="w-1/2">
        <h3 className="mb-[10px] text-heading-3 leading-[60px]">
          Subscribe now and get 10% off all items
        </h3>
        <p className="mb-10 text-body-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text.
        </p>
        <div className="flex">
          <Input placehodler="Your email here..." className="w-[437px]" />
          <Button
            type="primary"
            title="Subcribe"
            className="py-5 font-bold px-9 text-heading-6"
          />
        </div>
      </div>
      <img
        src="/person.png"
        alt="person subcribe"
        className="absolute bottom-0 right-8 h-[460px] aspect-auto"
      />
    </div>
  );
}
