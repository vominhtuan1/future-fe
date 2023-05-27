import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import BannerContactUs from "../components/ui/banner/banner-contact-us";
import Filter from "../components/ui/Filter/Filter";
import Input from "../components/form/input/input";
import Button from "../components/form/button/button";
import toast from "react-hot-toast";
import { productApi } from "../api/product.api";
import ProductCard from "../components/ui/ProductCard/product-card";
import { useAppSelector } from "../store/hooks";
import { selectCategories } from "../redux/reducers/category-slice";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormValue {
  search: string;
}

export default function Shop() {
  const [products, setProducts] = useState<IProductCard[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = useAppSelector(selectCategories);
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      search: "",
    },
  });

  const handleGetProducts = async (page: number, isLoadMore?: boolean) => {
    try {
      const categoryName = searchParams.get("category");
      const search = searchParams.get("search") || "";
      const from = searchParams.get("from");
      console.log("from: ", from);
      const to = searchParams.get("to");
      console.log("to: ", to);
      const sort = searchParams.get("sort") || "";
      const category = categories.find((item) => item.name === categoryName);

      const data = await productApi.searchAndFilterProducts({
        categry: category?._id,
        limit: 9,
        page,
        search,
        from: from ? parseInt(from) : undefined,
        to: to ? parseInt(to) : undefined,
        sort: sort as "ascending" | "descending",
      });

      if (data.length === 0) {
        setEnd(true);
        return;
      }

      if (isLoadMore) {
        setProducts((value) => [...value, ...data]);
      } else {
        setProducts(data);
      }
    } catch (error) {
      toast.error((error as IResponseError).error);
    }
  };

  const handeLoadMore = async () => {
    setPage((page) => page + 1);
    handleGetProducts(page + 1, true);
  };

  const handleSearch = (value: FormValue) => {
    setSearchParams({ search: value.search });
  };

  useEffect(() => {
    handleGetProducts(0);
    setEnd(false);
    setPage(0);
  }, [searchParams]);

  return (
    <div className="mx-[75px] mt-[50px] mb-[100px]">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[450px]"
      >
        <SwiperSlide>
          <BannerContactUs image="./room-decor1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContactUs image="./room-decor2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContactUs image="./room-decor3.jpg" />
        </SwiperSlide>
      </Swiper>
      <div className="flex mt-[50px] gap-x-[100px]">
        <div className="relative">
          <Filter />
        </div>

        <div>
          <form onSubmit={handleSubmit(handleSearch)} className="flex mb-11">
            <Input
              register={register}
              name="search"
              option={{ required: { value: true, message: "Nhập từ khóa" } }}
              variation="filled"
              error={errors.search?.message}
              className="!bg-scarlet text-body-3 !p-[14px]"
            />
            <Button
              type="submit"
              title="Tìm kiếm"
              variant="primary"
              className="px-[30px] py-[14px] text-body-3 leading-[14px]"
            />
          </form>
          <div className="grid grid-cols-3 gap-4">
            {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
          {!end && (
            <Button
              onClick={handeLoadMore}
              title="Xem thêm"
              variant="primary"
              className="block px-8 py-4 mx-auto mt-10"
            />
          )}
        </div>
      </div>
    </div>
  );
}
