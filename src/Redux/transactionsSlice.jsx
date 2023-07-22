import { createSlice } from "@reduxjs/toolkit";
import dataObjects from "../components/Transaction/devObject";

const initialState = [...dataObjects];

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    removeTransaction: (state, action) => {
      const removeItemID = action.payload;
      return state.filter((transaction) => transaction.id !== removeItemID);
    },
  },
});

export const { removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
