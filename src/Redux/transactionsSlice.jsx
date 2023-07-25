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
    addTransaction: (state, action) => {
      const newTransaction = action.payload;
      state.transactions.push(newTransaction);
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

export const { removeTransaction, addTransaction, getBalance } =
  transactionSlice.actions;
export default transactionSlice.reducer;
