import fakeStoreApi from './fakeStoreApi';

export const productApi = fakeStoreApi.injectEndpoints({
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
