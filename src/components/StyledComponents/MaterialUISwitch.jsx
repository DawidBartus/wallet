import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 50,
  padding: 8,
  overflow: "visible",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(2px) translateY(2px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(30px) translateY(2px)",
      "& .MuiSwitch-thumb:before": {
        content: "'-'",
        backgroundColor: "#FF6596",
        borderRadius: "50%",
        boxShadow: "0px 6px 15px 0px rgba(255, 101, 150, 0.50)",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "transparent",
        border: "1px solid #E0E0E0",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 44,
    height: 44,
    "&:before": {
      backgroundColor: "#24CCA7",
      borderRadius: "50%",
      content: "'+'",
      boxShadow: "0px 6px 15px 0px rgba(36, 204, 167, 0.50)",
      alignContent: "center",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "transparent",
    border: "1px solid #E0E0E0",
    borderRadius: 20 / 2,
  },
}));

export default MaterialUISwitch;
