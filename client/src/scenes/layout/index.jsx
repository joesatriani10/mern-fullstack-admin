import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useGetUserQuery } from "../../state/api.js";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 900px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(isNonMobile);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  useEffect(() => {
    // Keep sidebar open on larger screens, close it on mobile by default
    setIsSidebarOpen(isNonMobile);
  }, [isNonMobile]);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100vh">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;
