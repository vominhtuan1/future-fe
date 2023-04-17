import * as React from "react";
import Slider from "@mui/material/Slider";

interface Category {
  name: string;
  quantity: number;
}

// cái này để tạm, gọi API sau.
const categories: Category[] = [
  { name: "Chair", quantity: 9 },
  { name: "Lamp", quantity: 9 },
  { name: "Table", quantity: 9 },
  { name: "Sofa", quantity: 9 },
  { name: "Clock", quantity: 9 },
  { name: "Pillow", quantity: 9 },
];

function valuetext(value: number) {
  console.log(value);
  return value * 20;
}
const minDistance = 5;

export default function Filter() {
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };

  return (
    <div className="w-[233px] pl-5">
      <h2 className="pt-8 text-xl font-black">Filter By Price</h2>
      <div className="flex py-4">
        <input
          disabled={true}
          placeholder={`$ ${valuetext(value[0])}`}
          className={
            "pl-1 w-2/5 border-[1px] outline-none border-light-gray bg-transparent rounded"
          }
        />
        <span className="w-1/5 text-center">-</span>
        <input
          disabled={true}
          placeholder={`$ ${valuetext(value[1])}`}
          className={
            "pl-1 w-2/5 border-[1px] outline-none border-light-gray bg-transparent rounded"
          }
        />
      </div>
      <Slider
        sx={{
          width: "100%",
          color: "rgb(6, 78, 59)",
        }}
        size="small"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        disableSwap
      />
      <h2 className="pt-8 text-xl font-black">Product Categories</h2>
      <ul className="flex-col flex">
        {categories.map((cate, index) => (
          <a
            key={index}
            href="#"
            className="text-sm text-gray-500 py-2 focus:text-emerald-800"
          >
            {cate.name}({cate.quantity})
          </a>
        ))}
      </ul>
    </div>
  );
}
