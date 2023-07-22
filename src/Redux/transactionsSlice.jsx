import { createSlice } from "@reduxjs/toolkit";
import dataObjects from "../components/Transaction/devObject";

const initialState = { ...dataObjects };

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    removeTransaction: (state, action) => {
      const removeItemID = action.payload;
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== removeItemID
      );
    },
    getBalance: (state) => {
      const allIncome = state.transactions.filter(
        (transaction) => transaction.type === true
      );
      const allExpense = state.transactions.filter(
        (transaction) => transaction.type === false
      );
      const income = allIncome.reduce(
        (total, transaction) => total + transaction.sum,
        0
      );
      const expense = allExpense.reduce(
        (total, transaction) => total + transaction.sum,
        0
      );
      state.saldo = income - expense;
    },
  },
});

export const { removeTransaction, getBalance } = transactionSlice.actions;
export default transactionSlice.reducer;
