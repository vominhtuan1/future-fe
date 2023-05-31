import axiosService from "./axios-service";

const API = process.env.REACT_APP_API_URL;

const ENDPOINT = "users";
const URL = `${API}/${ENDPOINT}`;

export const userApi = {
  getUserInfo: async () => {
    const response = await axiosService.get<IResponseSuccess<IUser>>(`${URL}`);

    return response.data.data;
  },
  updateUserInfo: async (body: UpdateUser) => {
    const response = await axiosService.put<IResponseSuccess<IAddress>>(
      `${URL}/setting`,
      {
        name: body.name,
        email: body.email,
        avatar: body.avatar,
        addresses: body.address,
        birthday: body.birthday,
      }
    );

    return response.data.data;
  },
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
