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
      <CircleBtn type="gray">{returnIcon()}</CircleBtn>
      <h2 className="pt-8 text-xl font-black">{title}</h2>
      <span className="text-sm text-gray-500">{children}</span>
    </div>
  );
}

export default AboutCard;
