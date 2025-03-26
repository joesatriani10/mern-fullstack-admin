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
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{
            mb: "0.5rem",
            width: "15rem",
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
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
