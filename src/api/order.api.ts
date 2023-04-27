import axiosService from "./axios-service";

const API = process.env.REACT_APP_API_URL;

const ENDPOINT = "orders";
const URL = `${API}/${ENDPOINT}`;

export const orderApi = {
  getOrderHistoryFollowStatus: async (status: string) => {
    const response = await axiosService.get<IResponseSuccess<IOrderHistory[]>>(
      `${URL}/history?status=${status}`
    );

    return response.data.data;
  },

  createOrder: async (body: ICreateOrder) => {
    const response = await axiosService.post<IResponseSuccess<string>>(
      `${URL}`,
      body
    );

    return response.data.data;
  },
};
