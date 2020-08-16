import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            Find Myanmar Room
          </Link>
        </Typography>

        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
