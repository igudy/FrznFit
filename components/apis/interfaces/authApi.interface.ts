export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface IAllUsers {
  _id: string;
  name: string;
  email: string;
  photo: string;
  bio: string;
  role: string;
  wishlist: any[];
  balance: number;
  isVerified: boolean;
  userAgent: string[];
  cartItems: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ILoginResponse {
  _id: string;
  name: string;
  email: string;
  bio: string;
  photo: string;
  role: string;
  isVerified: boolean;
  token: string;
  balance: number;
}

export interface IRegisterUser {
  _id: string;
  name: string;
  email: string;
  bio: string;
  photo: string;
  role: string;
  isVerified: boolean;
  token: string;
  userAgent: string[];
}

export interface ISingleUser {
  _id: string;
  name: string;
  email: string;
  bio: string;
  photo: string;
  role: string;
  isVerified: false;
  balance: number;
}
