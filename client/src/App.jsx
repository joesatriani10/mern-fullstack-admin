import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Products from "./scenes/products";
import Customers from "./scenes/customers";
import Transaction from "./scenes/transactions";
import Geography from "./scenes/geography";
import Overview from "./scenes/overview";
import Daily from "./scenes/daily/index.jsx";
import Monthly from "./scenes/monthly/index.jsx";
import Breakdown from "./scenes/breakdown/index.jsx";
import Admin from "./scenes/admin/index.jsx";
import Performance from "./scenes/performance/index.jsx";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route element={<Layout />}>
                {/*Every component will have the Nav and Sidebar*/}
                <Route
                  path={"/"}
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/products"} element={<Products />} />
                <Route path={"/customers"} element={<Customers />} />
                <Route path={"/transactions"} element={<Transaction />} />
                <Route path={"/geography"} element={<Geography />} />
                <Route path={"/overview"} element={<Overview />} />
                <Route path={"/daily"} element={<Daily />} />
                <Route path={"/monthly"} element={<Monthly />} />
                <Route path={"/breakdown"} element={<Breakdown />} />
                <Route path={"/admin"} element={<Admin />} />
                <Route path={"/performance"} element={<Performance />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
