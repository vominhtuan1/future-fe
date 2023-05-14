import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectCategories } from "../../../redux/reducers/category-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CategoryCard from "../category/category-card";
import clsx from "clsx";
import CommentCard from "../card/comment-card";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ChervonLeft, ChervonRight } from "../../icon";

const DescriptionReview = () => {
  const categories = useAppSelector(selectCategories);
  const [tab, setTab] = useState<"description" | "comment">("description");

  const handleTabClick = (tab: "description" | "comment") => () => {
    setTab(tab);
  };

  return (
    <div className="flex px-8 py-5">
      <div className="flex-1 mr-6">
        <div className="relative">
          <ul className="flex gap-x-12">
            <li
              onClick={handleTabClick("description")}
              className={clsx(
                "font-bold tab cursor-pointer transition-all duration-300",
                tab === "description" ? "text-teal-800" : "text-black"
              )}
            >
              <p className="relative z-10 leading-6 text-heading-6 font-heading text-end">
                Mô tả
              </p>
              {tab === "description" && (
                <p className="relative bottom-0 z-0 -translate-y-[130%] h-[6px] bg-wheat"></p>
              )}
            </li>
            <li
              onClick={handleTabClick("comment")}
              className={clsx(
                "font-bold tab cursor-pointer transition-all duration-300",
                tab === "comment" ? "text-teal-800" : "text-black"
              )}
            >
              <p className="relative z-10 leading-6 text-heading-6 font-heading text-end">
                Đánh giá
              </p>
              {tab === "comment" && (
                <p className="relative bottom-0 z-0 -translate-y-[130%] h-[6px] bg-wheat"></p>
              )}
            </li>
          </ul>
        </div>

        {tab === "description" && (
          <div className="mt-6">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        )}

        {tab === "comment" && (
          <div className="mt-6 space-y-8">
            <CommentCard
              comment={{
                _id: "lsdkf",
                avatar:
                  "https://i.pinimg.com/564x/09/ef/89/09ef89ddb9d42172c6adfc52cfd607cc.jpg",
                content:
                  "Tôi đã mua cái cốc Contigo Autoseal West Loop trên Amazon và tôi rất hài lòng với nó. Cốc này có nắp đậy tự động, không bị rò rỉ khi mang đi. ",
                date: "Sun Dec 17 1995 03:24:00 GMT+0700",
                star: 4,
                name: "Nguyễn Hải Phong",
              }}
            />
            <CommentCard
              comment={{
                _id: "lsdkf",
                avatar:
                  "https://i.pinimg.com/564x/09/ef/89/09ef89ddb9d42172c6adfc52cfd607cc.jpg",
                content:
                  "Tôi đã mua cái cốc Contigo Autoseal West Loop trên Amazon và tôi rất hài lòng với nó. Cốc này có nắp đậy tự động, không bị rò rỉ khi mang đi. ",
                date: "Sun Dec 17 1995 03:24:00 GMT+0700",
                star: 4,
                name: "Nguyễn Hải Phong",
              }}
            />

            <div className="flex justify-center gap-x-1">
              <ChervonLeft />
              <p>1</p>/<p>4</p>
              <ChervonRight />
            </div>
          </div>
        )}
      </div>

      <Swiper
        className="flex-1 h-fit"
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
      >
        {categories.length > 0 &&
          categories.map((item) => (
            <SwiperSlide key={item._id}>
              <CategoryCard
                _id={item._id}
                image={item.image}
                title={item.name}
                subTitle={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                }
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default DescriptionReview;
