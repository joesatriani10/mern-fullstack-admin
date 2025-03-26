import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "../../state/api.js";
import Header from "../../components/Header.jsx";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../../state/geoData.js";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();

  return (
    <Box
      m={"1.5rem 2.5rem"}
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Header
        title="Geography"
        subtitle={"Find where your users are located"}
      />
      <Box
        mt={"40px"}
        height={"75vh"}
        border={`1px solid ${theme.palette.secondary[300]}`}
        borderRadius={"6px"}
        sx={{ backgroundColor: theme.palette.background.alt }}
      >
        {data ? (
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[300],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.primary[500],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[300],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.primary[600],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.primary[500],
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
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor={theme.palette.secondary[600]}
            label="properties.name"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={0.5}
            borderColor={theme.palette.primary[700]}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.primary[500],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.primary[700],
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
export default Geography;
