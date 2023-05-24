declare interface IComment {
  _id: string;
  content: string;
  rate: number;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

declare interface CreateComment {
  content: string;
  rate: number;
  productId: string;
}
