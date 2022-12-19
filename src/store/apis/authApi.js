import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authApi = createApi({
  reducerPath: 'authapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: ({ username, password }) => {
          return {
            headers: { 'Content-Type': 'application/json' },
            url: '/auth/login',
            method: 'POST',
            body: JSON.stringify({
              username,
              password
            })
          };
        }
      })
    };
  }
});

export const { useLoginMutation } = authApi;
