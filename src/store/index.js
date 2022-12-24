import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from './apis/authApi';

import { categoriesApi } from './apis/categoriesApi';
import { photoApi } from './apis/photosApi';
import { productApi } from './apis/productApi';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';

// store setup
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(photoApi.middleware)
      .concat(productApi.middleware)
      .concat(authApi.middleware);
  }
});

setupListeners(store.dispatch);

export {
  useGetAllCategoriesQuery,
  useGetSingleCategoryProdcutsQuery
} from './apis/categoriesApi';

export { useFetchPhotosQuery } from './apis/photosApi';

export {
  useFetchProductQuery,
  useFetchSmiliarProductsQuery
} from './apis/productApi';

export { useLoginMutation } from './apis/authApi';

export { addUser, removeUser } from './slices/userSlice';
export { addToCart, removeFromCart } from './slices/cartSlice';
