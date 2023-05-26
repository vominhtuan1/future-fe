declare interface UserInfoLogin {
  name: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
}

type AuthenticateLogin = Pick<UserInfoLogin, "username" | "password">;

type EmailVerify = Pick<UserInfoLogin, "email">;
