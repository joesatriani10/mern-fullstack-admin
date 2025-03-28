import { useMemo, useState } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { useGetSalesQuery } from "../../state/api.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ResponsiveLine } from "@nivo/line";

const Daily = () => {
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { dailyData } = data;
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

    // console.log("totalUnitsLine:", totalUnitsLine);

    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date);
      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf("-") + 1);

        totalSalesLine.data.push({ x: splitDate, y: totalSales });
        totalUnitsLine.data.push({ x: splitDate, y: totalUnits });
      }
    });

    const formatedData = [totalSalesLine, totalUnitsLine];

    return [formatedData];
  }, [data, startDate, endDate]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title={"DAILY SALES"} subtitle={"Chart of daily sales"} />
      <Box height={"75vh"}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Box>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              showMonthYearDropdown
              customInput={
                <Box
                  component="input"
                  sx={{
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.primary[700],
                    border: `1px solid ${theme.palette.primary[500]}`,
                    borderRadius: "6px",
                    padding: "5px",
                    "&:focus": {
                      borderColor: theme.palette.primary[700],
                      outline: "none",
                    },
                  }}
                />
              }
            />
          </Box>
          <Box>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              showMonthYearDropdown
              customInput={
                <Box
                  component="input"
                  sx={{
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.primary[700],
                    border: `1px solid ${theme.palette.primary[500]}`,
                    borderRadius: "6px",
                    padding: "5px",
                    "&:focus": {
                      borderColor: theme.palette.primary[700],
                      outline: "none",
                    },
                  }}
                />
              }
            />
          </Box>
        </Box>
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
            curve={"catmullRom"}
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
      </Box>
    </Box>
  );
};
export default Daily;
