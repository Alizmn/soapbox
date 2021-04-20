import React from "react";
import { makeStyles, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
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
}));

const SearchBar = ({ search, setSearch }) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
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
    </Paper>
  );
};

export default SearchBar;
