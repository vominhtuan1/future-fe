import React, { useEffect, useRef } from "react";
import Underline from "../../icon/underline";

interface Props {
  text: string;
}

export default function TextCustomUnderline({ text }: Props) {
  const ref = useRef<HTMLElement>(null);

  return (
    <h3 className="inline relative">
      <strong ref={ref} className="text-dark-slate-gray">
        {text}
      </strong>
      <Underline className="absolute inline -bottom-1/3 w-full left-0" />
    </h3>
  );
}
