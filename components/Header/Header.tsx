import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";

const Header: React.FunctionComponent = () => {
  const [showNavMenu, toggleShowNavMenu] = React.useState(false);

  return (
    <div data-testid="header-testid">
      <AppBar position="static" style={{ backgroundColor: "#c3c3c3" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleShowNavMenu(!showNavMenu)}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ paddingTop: "5px" }}>
            <Logo />
          </div>
        </Toolbar>
      </AppBar>
      {showNavMenu && (
        <NavMenu
          isOpen={showNavMenu}
          toggleOpen={toggleShowNavMenu}
        />
      )}
    </div>
  );
};

export default Header;
