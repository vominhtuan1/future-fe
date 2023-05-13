import React, { useEffect } from "react";
import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectCategories } from "../redux/reducers/category-slice";
import { getCategories } from "../redux/actions/category-action";
import { toast } from "react-hot-toast";

export default function MainLayout() {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  const handleFetchCategories = async () => {
    if (categories.length === 0) {
      try {
        await dispatch(getCategories()).unwrap();
      } catch (error) {
        toast.error("Không thể lấy danh sách phân loại");
      }
    }
  };

  useEffect(() => {
    handleFetchCategories();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
