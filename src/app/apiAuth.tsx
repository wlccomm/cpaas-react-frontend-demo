import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiAuth = createApi({
  reducerPath: "apiAuth",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiAuth;
