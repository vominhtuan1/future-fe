import React from "react";
import AboutCard from "./AboutCard";

function Strengths() {
  return (
    <div className="flex gap-x-[85px]">
      <div className="w-1/2">
        <h1 className="font-bold text-heading-3">
          We guarantee the safety of your shopping
        </h1>
        <div className="mt-[50px] grid grid-cols-2 gap-[50px]">
          <AboutCard title="Fast Shipping" icon="rocket">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has
          </AboutCard>
          <AboutCard title="Safe Delivery" icon="lock">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has
          </AboutCard>
          <AboutCard title="365 Days Return" icon="reload">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has
          </AboutCard>
          <AboutCard title="24 Hours CS" icon="phone">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has
          </AboutCard>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/strength_img.png"
          alt="strength image"
          className="object-cover h-full"
        />
      </div>
    </div>
  );
}

export default Strengths;
