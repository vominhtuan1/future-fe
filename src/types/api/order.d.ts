declare interface IOrderHistory {
  _id: string;
  shortId: string;
  total: number;
  createdAt: string;
  firstProduct: {
    _id: string;
    name: string;
    thumbnail: string;
    quantity: number;
    price: number;
  };
  orderItemsLength: number;
}

declare interface IOrder {
  _id: string;
  address: {
    _id: string;
    province: string;
    district: string;
    ward: string;
    specificAddress: string;
    phone: string;
    receiver: string;
  };
  orderItems: IOrderItemRes[];
  total: number;
  status: OrderStatus;
  shortId: string;
  paymentMethod: string;
  createdAt: string;
}

declare interface IOrderItem {
  _id: string;
  price: number;
  quantity: number;
  product: {
    _id: string;
    name: string;
    thumbnail: string;
  };
}

declare interface ICreateOrder {
  orderItems: {
    product: string;
    price: number;
    quantity: number;
  }[];
  address: string;
  paymentMethod: string;
}

declare interface ICreateZaloPayOrder {
  amount: number;
  order_id: string;
  bank_code: string;
}

declare interface IQueryOrderZaloPayStatusRes {
  orderStatus: number;
}
