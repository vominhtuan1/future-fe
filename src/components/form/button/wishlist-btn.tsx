import React, { useState } from "react";
import IconBtn from "./icon-btn";
import { Heart, HeartFill } from "../../icon";

interface Props {
  defaultLove?: boolean;
}

export default function WishlistBtn({ defaultLove = false }: Props) {
  const [love, setLove] = useState<boolean>(defaultLove);

  const handleClick = () => {
    setLove(!love);
  };

  return (
    <IconBtn
      onClick={handleClick}
      className="border-[1px] border-light-gray"
      icon={love ? <HeartFill className="text-red-accent" /> : <Heart />}
    />
  );
}
