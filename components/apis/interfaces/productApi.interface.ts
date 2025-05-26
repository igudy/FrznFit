export interface IRating {
  star: number;
  review: string;
  reviewDate: string;
  name: string;
  userID: string;
}

export interface IProduct {
  _id: string;
  name: string;
  productImg: string;
  quantity: number;
  price: number;
  falsePrice: number;
  category: string;
  brand: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  sold: number;
  ratings: IRating[];
  description?: string;
}
