import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import fakeStoreApi from './fakeStoreApi';

// fecthing categories data with rtk query
export const categoriesApi = fakeStoreApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      // fetching all categories
      getAllCategories: builder.query({
        query: () => {
          return {
            url: '/products/categories',
            method: 'GET'
          };
        }
      }),
      // fetching single category products
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
