import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counterSlice';
import { externalUserApi } from './services/externalUserQuery';
import { localUserApi } from './services/localUserQuery';

export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    [externalUserApi.reducerPath]: externalUserApi.reducer,
    [localUserApi.reducerPath]: localUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(externalUserApi.middleware)
      .concat(localUserApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
