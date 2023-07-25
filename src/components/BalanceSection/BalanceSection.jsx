import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../Redux/transactionsSlice";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const BalanceSection = styled(Box)`
  max-width: 395px;
  min-width: 280px;
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding-left: 40px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  // @media (max-width: 1279px) {
  //   margin-right: 32px;
  // }
`;

const Balance = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);

  useEffect(() => {
    dispatch(getBalance());
  }, [transactions, dispatch]);

  const balance = useSelector((state) => state.transaction.saldo);

  return (
    <BalanceSection>
      <Typography style={{ color: "#A6A6A6" }}>Your Balance</Typography>
      <Typography variant="balance">$ {balance}</Typography>
    </BalanceSection>
  );
};

export default Balance;
