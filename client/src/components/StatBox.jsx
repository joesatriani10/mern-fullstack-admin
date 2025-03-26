import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween.jsx";

const StatBox = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"space-between"}
      p={"1.25rem 1rem"}
      flex={"1 1 100%"}
      backgroundColor={theme.palette.background.alt}
      border={"0.55rem"}
    >
      <FlexBetween>
        <Typography variant={"h6"} sx={{ color: theme.palette.primary[500] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <Typography
        variant={"h3"}
        fontWeight={"600"}
        sx={{
          color: theme.palette.primary[700],
        }}
      >
        {value}
      </Typography>
      <FlexBetween gap={"1rem"}>
        <Typography
          variant={"h5"}
          fontStyle={"italic"}
          sx={{
            color: theme.palette.primary[400],
          }}
        >
          {increase}
        </Typography>
        <Typography sx={{ color: theme.palette.primary[600] }}>
          {description}
        </Typography>
      </FlexBetween>
    </Box>
  );
};
export default StatBox;
