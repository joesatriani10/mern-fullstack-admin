import FlexBetween from "../../components/FlexBetween";
import Header from "../../components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "../../components/BreakDownChart.jsx";
import OverviewChart from "../../components/OverviewChart.jsx";
import { useGetDashboardQuery } from "../../state/api";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();

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
      headerName: "CreatedAt",
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
    <Box m="1.5rem 2.5rem">
      {/* Header Section with Download Button */}
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.primary[500],
              color: theme.palette.background.default,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": { backgroundColor: theme.palette.primary[400] },
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      {/* Main Grid Layout */}
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* First Row - 4 StatBoxes aligned in one line */}
        <Box gridColumn="span 3">
          <StatBox
            title="Total Customers"
            value={data?.totalCustomers}
            increase="+14%"
            description="Since last month"
            icon={
              <Email
                sx={{ color: theme.palette.primary[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box gridColumn="span 3">
          <StatBox
            title="Sales Today"
            value={data?.todayStats.totalSales}
            increase="+21%"
            description="Since last month"
            icon={
              <PointOfSale
                sx={{ color: theme.palette.primary[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box gridColumn="span 3">
          <StatBox
            title="Monthly Sales"
            value={data?.thisMonthStats.totalSales}
            increase="+5%"
            description="Since last month"
            icon={
              <PersonAdd
                sx={{ color: theme.palette.primary[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box gridColumn="span 3">
          <StatBox
            title="Yearly Sales"
            value={data?.yearlySalesTotal}
            increase="+43%"
            description="Since last month"
            icon={
              <Traffic
                sx={{ color: theme.palette.primary[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Second Row - OverviewChart and BreakdownChart side by side */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.primary[500] }}>
            Monthly Sales
          </Typography>
          <OverviewChart view="sales" isDashboard={true} />
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.primary[500] }}>
            Sales By Category
          </Typography>
          <BreakdownChart isDashboard={true} />
        </Box>

        {/* Third Row - Full Width DataGrid (Transactions Table) */}
        <Box
          gridColumn="span 12"
          gridRow="span 3"
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
            rows={(data && data.transactions) || []}
            columns={columns}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
