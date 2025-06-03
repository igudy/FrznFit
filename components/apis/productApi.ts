import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProduct } from "./interfaces/productApi.interface";

export const BASE_URL = Constants.expoConfig?.extra?.backendUrl;
export const API_VERSION = "api/";

const getToken = async () => {
  try {
    const savedToken = await AsyncStorage.getItem("token");
    console.log("🚀 ~ getToken ~ savedToken:", savedToken);
    return savedToken || "";
  } catch (error) {
    console.error("Failed to fetch token:", error);
    return "";
  }
};

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["productApi"],
  baseQuery: async (args, api, extraOptions) => {
    const rawBaseQuery = fetchBaseQuery({
      baseUrl: `${BASE_URL}/${API_VERSION}`,
      prepareHeaders: async (headers) => {
        const token = await getToken();
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    });

    return rawBaseQuery(args, api, extraOptions);
  },
  
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], any>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: ["productApi"],
    }),
    getProductById: builder.query<IProduct, { id: string | string[] }>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["productApi"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
