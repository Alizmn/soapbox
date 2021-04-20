import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  CssBaseline,
  useScrollTrigger,
  Fab,
  Zoom,
} from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = (props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {props.children}
      </div>
    </Zoom>
  );
};

const NavBar = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Scroll to see more gifs</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};
export default NavBar;
