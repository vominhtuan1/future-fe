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
