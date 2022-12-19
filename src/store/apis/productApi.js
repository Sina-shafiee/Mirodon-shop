import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pause } from '../../util/pause';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
    fetchFn: async (...args) => {
      // await pause(4499);
      return fetch(...args);
    }
  }),

  endpoints: (builder) => {
    return {
      fetchProduct: builder.query({
        query: (productId) => {
          return {
            url: `/products/${productId}`,
            method: 'GET'
          };
        }
      }),
      fetchSmiliarProducts: builder.query({
        query: (categoryName) => {
          return {
            url: `/products/category/${categoryName}`,
            method: 'GET',
            params: {
              limit: 4
            }
          };
        }
      })
    };
  }
});

export const { useFetchProductQuery, useFetchSmiliarProductsQuery } =
  productApi;
