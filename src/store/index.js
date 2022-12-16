import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { categoriesApi } from './apis/categoriesApi';

// store setup
export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(categoriesApi.middleware);
  }
});

setupListeners(store.dispatch);

export {
  useGetAllCategoriesQuery,
  useGetSingleCategoryProdcutsQuery
} from './apis/categoriesApi';
