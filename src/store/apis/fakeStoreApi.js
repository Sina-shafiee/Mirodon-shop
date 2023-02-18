import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const fakeStoreApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: () => ({})
});

export default fakeStoreApi;
