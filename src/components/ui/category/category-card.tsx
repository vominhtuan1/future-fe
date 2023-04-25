import React from "react";
import Button from "../../form/button/button";

interface Props {
  title: string;
  subTitle: string;
  image: string;
}

export default function CategoryCard({ title, subTitle, image }: Props) {
  return (
    <div className="grid grid-cols-2 bg-scarlet h-[350px]">
      <div className="pt-[35px] pl-[30px]">
        <p className="capitalize text-body-1 mb-[25px] text-dark-slate-gray">
          {title}
        </p>
        <h3 className="text-heading-4 mb-[35px]">{subTitle}</h3>
        <Button
          title="Shop now"
          variant="secondary"
          className="px-10 py-3 capitalize"
        />
      </div>
      <div className="flex items-center justify-center h-full overflow-hidden">
        <img src={image} className="object-contain w-auto h-full" />
      </div>
    </div>
  );
}
