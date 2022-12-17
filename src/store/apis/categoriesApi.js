import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// fecthing categories data with rtk query
export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/'
  }),
  endpoints: (builder) => {
    return {
      // fetching all categroies
      getAllCategories: builder.query({
        query: () => {
          return {
            url: '/products/categories',
            method: 'GET'
          };
        }
      }),
      // fecthing single category products
      getSingleCategoryProdcuts: builder.query({
        query: (categoryName) => {
          return {
            url: `/products/category/${categoryName}`,
            method: 'GET'
          };
        }
      })
    };
  }
});

export const { useGetAllCategoriesQuery, useGetSingleCategoryProdcutsQuery } =
  categoriesApi;
