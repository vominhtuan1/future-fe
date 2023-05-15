declare interface IProductInfo {
  _id: string;
  name: string;
  star: number;
  images: string[];
  description: string;
  price: number;
}

declare type FavoriteProduct = Pick<IProductInfo, "_id" | "name" | "price"> & {
  thumbnail: string;
  isStock: boolean;
};

declare interface IProductDetail {
  _id: string;
  name: string;
  rating: number;
  images: string[];
  description: string;
  price: number;
  catogory: {
    _id: string;
    name: string;
  };
  comments: {
    _id: string;
    content: string;
    rate: number;
    user: {
      _id: string;
      name: string;
      avatar: string;
    };
  }[];
  quantity: number;
  thumbnail: string;
}
