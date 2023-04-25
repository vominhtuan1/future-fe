import React from "react";

const DescriptionReview = () => {
  return (
    <div className="flex px-10 py-5">
      <div className="flex-1 mr-6">
        <div>
          <ul className="flex">
            <li className="mr-6 text-teal-800 font-bold border-b-amber-200 border-b-2">
              Description
            </li>
            <li className="text-black font-bold">Review</li>
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>

      <div className="bg-slate-200 flex-1 flex flex-col p-4 ml-6">
        <div className="flex">
          <div className="flex flex-col justify-between flex-1">
            <a href="#" className="text-teal-800 mb-8">
              Living Room
            </a>
            <h2 className="text-4xl mb-8">The best foam padded chair</h2>
            <button className="border-teal-800 border-2 w-[100px] h-[30px]">
              Shop Now
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/public/chair.png"
              alt="chair"
              className="inline-block object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 mb-5">
          <button className="w-[10px] h-[10px] rounded-full bg-teal-500 mr-4"></button>
          <button className="w-[10px] h-[10px] rounded-full bg-teal-800 mr-4"></button>
          <button className="w-[10px] h-[10px] rounded-full bg-teal-500"></button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionReview;
