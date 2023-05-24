import axiosService from "./axios-service";

const API = "/api/v1";

const ENDPOINT = "authenticate";
const URL = `${API}/${ENDPOINT}`;

interface AuthenticateToken {
  token: string;
}
export const authenticateApi = {
  login: async (body: AuthenticateLogin) => {
    const response = await axiosService.post<
      IResponseSuccess<AuthenticateToken>
    >(`${URL}/login`, body);

    return response.data.data;
  },
  sendCode: async (body: EmailVerify) => {
    const response = await axiosService.post<IResponseSuccess<string>>(
      `${URL}/send-code-email`,
      body
    );

    return response.data.data;
  },
};
