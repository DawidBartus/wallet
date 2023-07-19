import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { balance } from "../../devUtils/devVariable";

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
  return (
    <BalanceSection>
      <Typography style={{ color: "#A6A6A6" }}>Your Balance</Typography>
      <Typography variant="balance">$ {balance}</Typography>
    </BalanceSection>
  );
};

export default Balance;
