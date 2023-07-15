import { Box } from "@mui/material";

const FormBlurBackground = (props) => {
  const { style, children } = props;
  return (
    <Box component="div" style={style}>
      {children}
    </Box>
  );
};

export default FormBlurBackground;
