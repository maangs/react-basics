import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1337,
};

export const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  counterReducer.actions;
export default counterReducer.reducer;
