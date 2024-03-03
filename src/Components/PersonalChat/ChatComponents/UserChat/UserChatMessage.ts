import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../ReduxToolkit/app_store";
import { formDataType } from "../../typesPersonChat";

// Define a type for the slice state
interface CounterState {
  message: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  message: "",
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    sendMessage: (message: formDataType) => {
      console.log(message);
    },
  },
});

export const { sendMessage } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer;