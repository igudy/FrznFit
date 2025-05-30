import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IAllUsers,
  ILoginResponse,
  IRegisterUser,
  ISingleUser,
} from "./interfaces/authApi.interface";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = Constants.expoConfig?.extra?.backendUrl;
export const API_VERSION = "api/";

// Hardcoded token (used only for setting temporarily)
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGY3Zjc4Mjg0N2ExN2VlYWQxMDM0ZCIsImlhdCI6MTc0ODEzMTAzMSwiZXhwIjoxNzQ4MjE3NDMxfQ.Mxak6DdLCqviWoALDXkCspK5TtUUDSqX1E3X-sXfSJE";
// console.log("🚀 ~ token:", token);

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

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["authApi"],
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
    getUsers: builder.query<IAllUsers, any>({
      query: () => ({
        url: `users/getUsers`,
        method: "GET",
      }),
      providesTags: ["authApi"],
    }),
    getSingleUser: builder.query<ISingleUser, any>({
      query: () => ({
        url: `users/getUser`,
        method: "GET",
      }),
      providesTags: ["authApi"],
    }),
    getLoginStatus: builder.query<any, any>({
      query: () => ({
        url: `users/loginStatus`,
        method: "GET",
      }),
      providesTags: ["authApi"],
    }),
    loginUser: builder.mutation<
      ILoginResponse,
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: `users/login`,
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["authApi"],
    }),
    registerUser: builder.mutation<
      IRegisterUser,
      { name: string; email: string; password: string }
    >({
      query: (credentials) => ({
        url: `users/register`,
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["authApi"],
    }),
    googleLogin: builder.mutation({
      query: (credentials) => ({
        url: "/google/callback",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetLoginStatusQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetSingleUserQuery,
  useGoogleLoginMutation,
} = authApi;

// "backendUrl": "http://localhost:3000"
// "backendUrl": "https://shopiverse-server.onrender.com"
