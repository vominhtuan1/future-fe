import React, { useEffect } from "react";
import { Loading, PayOnline } from "../components/icon";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { orderApi } from "../api/order.api";
import { toast } from "react-hot-toast";

export default function ZaloPayResult() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQueryZaloPayOrderStatus = async () => {
    try {
      const app_trans_id = searchParams.get("apptransid");
      if (app_trans_id) {
        const response = await orderApi.queryZaloPayOrderStatus(app_trans_id);
        if (response.orderStatus === 1) {
          toast.success("Payment with ZaloPay successfully");
          navigate({
            pathname: "/order-history",
            search: createSearchParams({
              status: "pending",
            }).toString(),
          });
        } else {
          toast.error("Failed payment with ZaloPay");
          navigate("/checkout");
        }
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    handleQueryZaloPayOrderStatus();
  }, []);

  return (
    <div className="px-[75px] mb-28">
      <PayOnline height={300} className="mx-auto mt-[50px]" />
      <div className="mt-[50px] relative w-fit mx-auto">
        <h3 className="text-center text-heading-3">Processing</h3>
        <Loading
          height={56}
          className="absolute top-0 translate-x-full -right-1 h-14"
        />
      </div>
      <p className="mt-4 text-center text-body-1 text-philippine-gray">
        we are checking your transaction status
      </p>
    </div>
  );
}
