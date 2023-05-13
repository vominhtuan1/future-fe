import axiosService from "./axios-service";

const API = process.env.REACT_APP_API_URL;

const ENDPOINT = "products";
const URL = `${API}/${ENDPOINT}`;

export const productAPI = {
  getNewestProds: async () => {
    const response = await axiosService.get<IResponseSuccess<IProductCard[]>>(
      `${URL}/newest`
    );

    return response.data.data;
  },
};
