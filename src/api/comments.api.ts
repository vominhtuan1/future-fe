import axiosService from "./axios-service";

const API = process.env.REACT_APP_API_URL;

const ENDPOINT = "comments";
const URL = `${API}/${ENDPOINT}`;

export const commentsApi = {
  create: async (body: CreateComment) => {
    const response = await axiosService.post<IResponseSuccess<IComment>>(
      `${URL}`,
      body
    );

    return response.data.data;
  },

  delete: async (id: string, productId: string) => {
    const response = await axiosService.delete<IResponseSuccess<string>>(
      `${URL}/${productId}/${id}`
    );

    return response.data.data;
  },
};
