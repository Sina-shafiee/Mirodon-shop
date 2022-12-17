import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { categoriesApi } from './apis/categoriesApi';
import { photoApi } from './apis/photosApi';

// store setup
export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(photoApi.middleware);
  }
});

setupListeners(store.dispatch);

export {
  useGetAllCategoriesQuery,
  useGetSingleCategoryProdcutsQuery
} from './apis/categoriesApi';

export { useFetchPhotosQuery } from './apis/photosApi';
