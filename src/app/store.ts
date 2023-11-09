import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counterSlice";
import { userApi } from "./services/rtkQuery";

export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
