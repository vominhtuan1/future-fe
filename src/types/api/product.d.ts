declare interface IProductInfo {
  _id: string;
  name: string;
  star: number;
  images: string[];
  description: string;
  price: number;
}

declare interface IProductCard {
  _id: string;
  name: string;
  price: number;
  category: {
    _id: string;
    name: string;
  };
  thumbnail: string;
}
