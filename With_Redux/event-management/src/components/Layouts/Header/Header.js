import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Header.css";

const Header = () => {
  return (
    <AppBar position="static">
      <ToolBar>
        <Typography
          variant="h5"
          className="title"
          color="inherit"
          align="center"
        >
          Event Management
        </Typography>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
