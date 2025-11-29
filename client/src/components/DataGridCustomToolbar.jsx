import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment, useTheme } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween.jsx";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  const theme = useTheme();

  return (
    <GridToolbarContainer sx={{ width: "100%" }}>
      <FlexBetween
        width="100%"
        sx={{ flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}
      >
        <FlexBetween sx={{ flexWrap: "wrap", gap: "0.35rem" }}>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{
            mb: "0.5rem",
            width: { xs: "100%", sm: "15rem" },
            maxWidth: "100%",
            "& .MuiInputBase-root": {
              color: theme.palette.primary[700],
              borderBottom: `2px solid ${theme.palette.primary[500]}`,
            },
          }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSearch(searchInput);
                      setSearchInput("");
                    }}
                    sx={{
                      color:
                        theme.palette.mode === "dark"
                          ? theme.palette.primary[300]
                          : theme.palette.primary[700],
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          fullWidth
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
