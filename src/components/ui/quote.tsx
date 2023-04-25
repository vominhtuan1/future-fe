import React from "react";
import QuoteAltLeft from "../icon/quote-alt-left";
import { Avatar } from "@mui/material";

interface Props {
  title: string;
  subTitle: string;
  avatar: string;
  name: string;
  address: string;
}

export default function Quote({
  title,
  subTitle,
  avatar,
  name,
  address,
}: Props) {
  return (
    <div className="space-y-5">
      <QuoteAltLeft />
      <p className="text-heading-7 font-semibold">{title}</p>
      <p className="text-body-3 font-normal text-black/50 !mt-2">{subTitle}</p>
      <div className="flex gap-x-4 items-center">
        <Avatar alt={name} src={avatar} sx={{ width: 56, height: 56 }} />
        <div>
          <p className="text-heading-7 font-semibold">{name}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
}
