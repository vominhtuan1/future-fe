import React from "react";
import CircleBtn from "../../form/button-circle/social-btn";
import { RocketIcon, LockIcon, ReloadIcon, PhoneIcon } from "../../icon";

interface Props {
  children?: React.ReactNode;
  title: string;
  icon: "rocket" | "lock" | "reload" | "phone";
  className?: string;
}

function AboutCard({ children, title, icon, className }: Props) {
  const returnIcon = () => {
    switch (icon) {
      case "rocket":
        return <RocketIcon />;
      case "lock":
        return <LockIcon />;
      case "reload":
        return <ReloadIcon />;
      case "phone":
        return <PhoneIcon />;
    }
  };

  return (
    <div className={`${className} flex flex-col py-5 w-64 h-52`}>
      <CircleBtn type="gray" className="p-[15px] w-[60px] h-[60px]">
        {returnIcon()}
      </CircleBtn>
      <h2 className="mt-8 text-xl font-bold">{title}</h2>
      <span className="mt-[15px] leading-6 font-normal text-sm text-gray-500">
        {children}
      </span>
    </div>
  );
}

export default AboutCard;
