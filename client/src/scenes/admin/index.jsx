import { Box, useTheme } from "@mui/material";
import { useGetAdminsQuery } from "../../state/api.js";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header.jsx";
import CustomColumnMenu from "../../components/DataGridCustomColumnMenu.jsx";

const Admin = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title="ADMINS" subtitle={"Managing admins and list of admins"} />
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
          rows={data || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};
export default Admin;
