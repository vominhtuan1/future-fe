import axiosService from "./axios-service";

const API = process.env.REACT_APP_API_URL;

const ENDPOINT = "comments";
const URL = `${API}/${ENDPOINT}`;

export const commentApi = {
  CreateComment: async (body: ICreateComment) => {
    const response = await axiosService.post<IResponseSuccess<IComment>>(
      URL,
      body
    );
    return response.data.data;
  },
};
