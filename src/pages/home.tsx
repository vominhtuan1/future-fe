import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import BannerHome from "../components/ui/banner/banner-home";
import { selectCategories } from "../redux/reducers/category-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CategoryCard from "../components/ui/category/category-card";
import DescriptionReview from "../components/ui/description-review/descriptionReview";

export default function Home() {
  const categories = useAppSelector(selectCategories);

  return (
    <div>
      <BannerHome />
      <div className="mt-20 mx-[32px]">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={true}
          modules={[Pagination]}
        >
          {categories.length > 0 &&
            categories.map((item, index) => (
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
      <DescriptionReview />
    </div>
  );
}
