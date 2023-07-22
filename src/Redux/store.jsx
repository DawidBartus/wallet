import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionsSlice";

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});

export default store;
