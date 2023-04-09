import React from "react";
import TextCustomUnderline from "./text-custom-underline";
import BedsideCabinet from "../../../../public/bedside_cabinet.png";

export default function BannerHome() {
  return (
    <div className="grid grid-cols-2 px-[75px] gap-x-28 bg-scarlet">
      <div className="flex flex-col justify-center">
        <p className="text-body-1 capitalize">Interior Needs</p>
        <h3 className="text-heading-3 mt-5 leading-[60px] font-bold">
          Various
          <TextCustomUnderline text=" new collections " />
          of furniture to decorate the corner of your house.
        </h3>
      </div>
      <div>
        <img src="/bedside_cabinet.png" />
      </div>
    </div>
  );
}
