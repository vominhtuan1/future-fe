import React from "react";
import AboutCard from "./AboutCard";

function Strengths() {
  return (
    <div className="flex">
      <div className="w-1/2 p-14">
        <h1 className="text-5xl font-black">
          We guarantee the safety of your shopping
        </h1>
        <div className="columns-2 pt-10">
          <AboutCard title="Fast Shipping" icon="rocket">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has{" "}
          </AboutCard>
          <AboutCard title="Safe Delivery" icon="lock">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has{" "}
          </AboutCard>
          <AboutCard title="365 Days Return" icon="reload">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has{" "}
          </AboutCard>
          <AboutCard title="24 Hours CS" icon="phone">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has{" "}
          </AboutCard>
        </div>
      </div>
      <img
        src="/strength_img.png"
        alt="strength image"
        className="object-contain w-auto h-full"
      />
    </div>
  );
}

export default Strengths;
