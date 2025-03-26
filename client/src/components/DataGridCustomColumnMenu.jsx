import { GridColumnMenuContainer, useGridApiContext } from "@mui/x-data-grid";
import { MenuItem } from "@mui/material";

const DataGridCustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  const apiRef = useGridApiContext();

  const handleFilterClick = () => {
    apiRef.current.showFilterPanel(currentColumn.field);
    hideMenu();
  };

  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <MenuItem onClick={handleFilterClick}>Filter</MenuItem>
    </GridColumnMenuContainer>
  );
};

export default DataGridCustomColumnMenu;
