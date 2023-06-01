declare interface UserInfoLogin {
  name: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
}

type AuthenticateLogin = Pick<UserInfoLogin, "username" | "password">;

declare interface EmailVerify {
  email: string;
  code: string;
}

declare interface CartItem {
  _id: string;
  thumbnail: string;
  name: string;
  price: number;
  quantity: number;
}

declare interface AddToCart {
  productId: string;
  quantity: number;
}

declare interface UpdateQuantity {
  productId: string;
  action: string;
}
