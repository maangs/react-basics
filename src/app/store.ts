import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counterSlice';
import { userApi } from './services/rtkQuery';
import { getTestApi } from './services/rtkTestQuery';

export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [getTestApi.reducerPath]: getTestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(getTestApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
