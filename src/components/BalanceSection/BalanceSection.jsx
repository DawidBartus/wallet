import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../Redux/transactionsSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BalanceSection = styled(Box)`
  min-width: 120px;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 4px 0px 11px 40px;
  @media (max-width: 768px) {
    margin-right: 32px;
  }
`;

const Balance = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const location = useLocation();
  const locationHome = location.pathname === "/home";

  useEffect(() => {
    dispatch(getBalance());
  }, [transactions, dispatch]);

  const balance = useSelector((state) => state.transaction.saldo);

  return (
    <BalanceSection style={{ display: locationHome ? "block" : "none" }}>
      <Typography style={{ color: "#A6A6A6" }}>Your Balance</Typography>
      <Typography variant="balance">$ {balance}</Typography>
    </BalanceSection>
  );
};

export default Balance;
