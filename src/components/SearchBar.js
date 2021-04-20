import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarsIcon from "@material-ui/icons/Stars";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "80%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

// const StyledMenu = withStyles({
//   paper: {
//     border: "1px solid #d3d4d5",
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "center",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "center",
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

const SearchBar = ({ search, setSearch }) => {
  const classes = useStyles();

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [searchArea, setSearchArea] = useState("All");

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Paper component="form" className={classes.root}>
      {/* <div>
        <IconButton
          className={classes.iconButton}
          aria-label="menu"
          onClick={handleClick}
        >
          <KeyboardArrowDownIcon />
          <Typography>{searchArea}</Typography>
        </IconButton>

        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              setSearchArea("All");
              handleClose();
            }}
          >
            <ListItemIcon>
              <AllInclusiveIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="All" />
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSearchArea("Favorites");
              handleClose();
            }}
          >
            <ListItemIcon>
              <StarsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSearchArea("Liked");
              handleClose();
            }}
          >
            <ListItemIcon>
              <FavoriteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Liked" />
          </MenuItem>
        </StyledMenu>
      </div> */}
      <InputBase
        className={classes.input}
        placeholder="Search GIPHY.COM"
        value={search}
        inputProps={{ "aria-label": "search giphy.com" }}
        onChange={(event) => setSearch(event.target.value)}
      />
      {search && (
        <IconButton aria-label="clear" onClick={() => setSearch("")}>
          <CancelIcon />
        </IconButton>
      )}
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider className={classes.divider} orientation="vertical" /> */}
    </Paper>
  );
};

export default SearchBar;
