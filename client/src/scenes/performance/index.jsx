import { Box, useTheme } from "@mui/material";
import { useGetUserPerformanceQuery } from "../../state/api.js";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header.jsx";
import CustomColumnMenu from "../../components/DataGridCustomColumnMenu.jsx";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header
        title="PERFORMANCE"
        subtitle={"Track your Affiliate Sales Performance here"}
      />
      <Box
        mt={"40px"}
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: theme.palette.primary[400],
            color: theme.palette.primary[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            color: theme.palette.primary[700],
          },

          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.background.alt,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary[400],
            color: theme.palette.primary[900],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color:
              theme.palette.mode === "dark"
                ? theme.palette.primary[500]
                : theme.palette.primary[900],
          },
          "& .MuiTablePagination-root": {
            color: theme.palette.primary[900],
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.sales) || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};
export default Performance;
