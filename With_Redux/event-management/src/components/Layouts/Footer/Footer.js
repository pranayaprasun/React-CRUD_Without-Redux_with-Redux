import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Footer.css";

const Footer = () => {
  return (
    <AppBar position="static">
      <ToolBar>
        <Typography
          variant="h5"
          className="footbar"
          color="inherit"
          align="center"
        >
          Footer
        </Typography>
      </ToolBar>
    </AppBar>
  );
};

export default Footer;
