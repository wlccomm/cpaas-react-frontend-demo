import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useAuthToken } from 'react-auth-kit';

export const apiAuth = createApi({
  reducerPath: "apiAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: "include", // this sends the react-auth-kit cookies (including _auth) along with the request
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body: body,
      }),
    }),
    getProtected: builder.query<any, void>({
      query: () => ({
        url: "protected",
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useLazyGetProtectedQuery } = apiAuth;
