import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './main';
import { moreSlice } from './more';

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    more: moreSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type RootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
