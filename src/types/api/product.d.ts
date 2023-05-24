declare interface IProductInfo {
  _id: string;
  name: string;
  star: number;
  images: string[];
  comments: IComment[];
  description: string;
  price: number;
}
