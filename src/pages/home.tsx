import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import BannerHome from "../components/ui/banner/banner-home";
import { selectCategories } from "../redux/reducers/category-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import CategoryCard from "../components/ui/category/category-card";
import { toast } from "react-hot-toast";
import { productAPI } from "../api/product.api";
import ProductCard from "../components/ui/ProductCard/product-card";
import Strengths from "../components/ui/Strengths/Strengths";

export default function Home() {
  const categories = useAppSelector(selectCategories);
  const [newestProds, setNewestProds] = useState<IProductCard[]>([]);

  const handleFetchNewestProducts = async () => {
    try {
      const res = await productAPI.getNewestProds();
      setNewestProds(res);
    } catch (error) {
      toast.error((error as IResponseError).error);
    }
  };

  useEffect(() => {
    handleFetchNewestProducts();
  }, []);

  return (
    <div>
      <BannerHome />
      <div className="mt-20 mx-[75px] mb-[100px]">
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
      {/* Newest Products */}
      <div className="mb-[100px]">
        <div className="mx-auto text-center w-fit mb-[50px]">
          <h3 className="mb-4 font-bold text-heading-5">Our Newest Product</h3>
          <p className="text-body-1 w-[471px] text-philippine-gray">
            Made of the best materials and with a design that follows the times
          </p>
        </div>

        <div className="px-[76px] w-full">
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={12}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
          >
            {newestProds.map((prod) => (
              <SwiperSlide key={prod._id}>
                <ProductCard product={prod} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Strengths />
    </div>
  );
}
