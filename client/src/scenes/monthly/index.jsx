import { useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { useGetSalesQuery } from "../../state/api.js";
import { ResponsiveLine } from "@nivo/line";

const Monthly = () => {
  const { data } = useGetSalesQuery();
  const theme = useTheme();

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { monthlyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      color: theme.palette.primary[500],
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: theme.palette.primary[700],
      data: [],
    };

    console.log("totalUnitsLine:", totalUnitsLine);

    Object.values(monthlyData).forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data.push({ x: month, y: totalSales });
      totalUnitsLine.data.push({ x: month, y: totalUnits });
    });

    const formatedData = [totalSalesLine, totalUnitsLine];

    return [formatedData];
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      m={"1.5rem 2.5rem"}
      x={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Header title={"MONTHLY SALES"} subtitle={"Chart of monthly sales"} />
      <Box height={"75vh"}>
        {data ? (
          <ResponsiveLine
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
            colors={{ datum: "color" }}
            margin={{
              top: 50,
              right: 50,
              bottom: 70,
              left: 60,
            }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: "Month",
              legendOffset: 60,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Total",
              legendOffset: -50,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 50,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>{" "}
    </Box>
  );
};
export default Monthly;
