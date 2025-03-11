import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiPing = createApi({
  reducerPath: "apiPing",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (builder) => ({
    getPing: builder.query({
      query: () => `ping`,
    }),
  }),
});

export const { useGetPingQuery, useLazyGetPingQuery } = apiPing;
