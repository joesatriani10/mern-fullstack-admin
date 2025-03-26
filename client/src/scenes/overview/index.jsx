import { useState } from "react";
import {
  MenuItem,
  InputLabel,
  Box,
  Select,
  FormControl,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import OverviewChart from "../../components/OverviewChart";

const Overview = () => {
  const theme = useTheme();
  const [view, setView] = useState("units");

  return (
    <Box
      m={"1.5rem 2.5rem"}
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Header
        title="Overview"
        subtitle={"Overview of general revenue and profit"}
      />
      <Box height={"75vh"}>
        <FormControl
          sx={{
            mt: "1rem",
            width: "150px",
            backgroundColor: theme.palette.background.alt,
            borderRadius: "5px",
          }}
        >
          <InputLabel
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.primary[300]
                  : theme.palette.primary[700],
            }}
            InputLabelProps={{
              style: {
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.primary[300]
                    : theme.palette.primary[700],
              },
            }}
          >
            View
          </InputLabel>
          <Select
            value={view}
            label={"View"}
            onChange={(e) => setView(e.target.value)}
            sx={{
              color: theme.palette.primary[700],
              backgroundColor: theme.palette.background.alt,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary[400],
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary[600],
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary[700],
              },
            }}
          >
            <MenuItem value={"sales"}>Sales</MenuItem>
            <MenuItem value={"units"}>Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} sx={{ mt: "1rem" }} />
      </Box>
    </Box>
  );
};
export default Overview;
