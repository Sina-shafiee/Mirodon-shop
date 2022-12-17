import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'ss9pP5MK_p-7grHKwvms-UBzGXlJq9L9-idkf8rAfOk';

export const photoApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com'
  }),
  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query({
        query: () => {
          return {
            method: 'GET',
            url: '/search/photos',
            headers: {
              Authorization: `Client-ID ${API_KEY}`
            },
            params: {
              query: 'shopping',
              per_page: 6,
              order_by: 'latest',
              orientation: 'squarish'
            }
          };
        }
      })
    };
  }
});

export const { useFetchPhotosQuery } = photoApi;
