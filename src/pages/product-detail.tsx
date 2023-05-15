import React, { useEffect, useState } from "react";
import ProductDetail from "../components/ui/product-detail/product-detail";
import { productApi } from "../api/product.api";
import { useParams } from "react-router-dom";
import DescriptionReview from "../components/ui/description-review/descriptionReview";

export default function ProductDetailPage() {
  const [product, setProduct] = useState<IProductDetail>();
  const { id } = useParams();
  const handleGetProduct = async () => {
    if (id) {
      const data = await productApi.getProductDetail(id);
      setProduct(data);
    }
  };
  useEffect(() => {
    handleGetProduct();
  }, []);
  return (
    <div>
      {product && (
        <>
          <ProductDetail product={product} />
          <DescriptionReview />
        </>
      )}
    </div>
  );
}
