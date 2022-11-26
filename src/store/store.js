import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@store/slices';
import { authMiddleware } from '@store/middlewares';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
