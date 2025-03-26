import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant={"h2"}
        color={
          theme.palette.mode === "dark"
            ? theme.palette.primary[500]
            : theme.palette.primary[800]
        }
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant={"h5"}
        color={
          theme.palette.mode === "dark"
            ? theme.palette.primary[600]
            : theme.palette.primary[700]
        }
        sx={{ mt: "3px", fontSize: "1.1rem", opacity: 0.9 }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
