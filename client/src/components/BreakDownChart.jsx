import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetSalesQuery } from "../state/api.js";

const BreakDownChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  if (!data || isLoading) return "Loading...";

  const colors = [
    theme.palette.primary[500],
    theme.palette.primary[400],
    theme.palette.primary[300],
    theme.palette.primary[200],
  ];

  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales,
      color: colors[i % colors.length], // Asegurar que el índice no se salga de rango
    }),
  );

  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
      <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.primary[600],
              },
            },
            legend: {
              text: {
                fill: theme.palette.primary[600],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.primary[600],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.primary[800],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.primary[600],
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.alt,
              color: theme.palette.primary[700],
              borderRadius: "4px",
              padding: "5px",
            },
          },
        }}
        colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        disableArcLinkLabels={isDashboard}
        arcLinkLabelsTextColor={theme.palette.primary[500]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 3]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 85,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary[500],
                },
              },
            ],
          },
        ]}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        color={theme.palette.primary[700]}
        textAlign="center"
        sx={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {!isDashboard && "Total"} ${data.yearlySalesTotal}
        </Typography>
      </Box>
    </Box>
  );
};

export default BreakDownChart;
