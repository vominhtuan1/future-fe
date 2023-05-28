import axiosService from "./axios-service";

const API = process.env.REACT_APP_API_URL;

const ENDPOINT = "users";
const URL = `${API}/${ENDPOINT}`;

export const userApi = {
  getAddresses: async () => {
    const response = await axiosService.get<IResponseSuccess<IAddress[]>>(
      `${URL}/addresses`
    );

    return response.data.data;
  },
  getWishlist: async () => {
    const response = await axiosService.get<
      IResponseSuccess<FavoriteProduct[]>
    >(`${URL}/wishlist`);

    return response.data.data;
  },
  deleteWishlistItem: async (productId: string) => {
    const response = await axiosService.delete<
      IResponseSuccess<FavoriteProduct>
    >(`${URL}/wishlist/${productId}`);

    return response.data.data;
  },
};
