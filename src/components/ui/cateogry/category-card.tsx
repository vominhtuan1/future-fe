import React from "react";
import Button from "../../form/button/button";

export default function CategoryCard() {
  return (
    <div className="grid grid-cols-2 bg-scarlet h-[350px]">
      <div className="pt-[35px] pl-[30px]">
        <p className="capitalize text-body-1 mb-[25px] text-dark-slate-gray">
          Living room
        </p>
        <h3 className="text-heading-4 mb-[35px]">The best foam padded chair</h3>
        <Button
          title="Shop now"
          type="secondary"
          className="px-10 py-3 capitalize"
        />
      </div>
      <div className="flex items-center justify-center h-full overflow-hidden">
        <img src="/chair.png" className="object-contain w-auto h-full" />
      </div>
    </div>
  );
}
