import Header from "../../components/Header.jsx";
import { Box } from "@mui/material";
import BreakDownChart from "../../components/BreakDownChart";

const Breakdown = () => {
  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title={"BREAKDOWN"} subtitle={"Breakdown of sales by category"} />
      <Box mt={"40px"} height={"75vh"}>
        <BreakDownChart />
      </Box>
    </Box>
  );
};
export default Breakdown;
