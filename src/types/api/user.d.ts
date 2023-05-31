declare interface UserInfoLogin {
  name: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
}

declare interface IUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
  birthday: string;
  address: IAddress;
}

type AuthenticateLogin = Pick<UserInfoLogin, "username" | "password">;

declare interface EmailVerify {
  email: string;
  code: string;
}
