import { Divider, Typography, makeStyles, IconButton } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarsIcon from "@material-ui/icons/Stars";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginRight: "1%",
    justifyContent: "flex-end",
  },
  like: {
    color: "red",
  },
  trend: {
    color: "orange",
  },
  fav: {
    color: "yellow",
  },
}));

const Section = ({ setStatus, setSearch }) => {
  const classes = useStyles();

  const handleClick = (stat) => {
    setStatus(stat);
    setSearch("");
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.container}>
          <IconButton onClick={() => handleClick("Trending")}>
            <WhatshotIcon className={classes.trend} />
            <Typography color="textSecondary" variant="subtitle2">
              Trending
            </Typography>
          </IconButton>
        </div>
        <div className={classes.container}>
          <IconButton onClick={() => handleClick("Favorites")}>
            <StarsIcon className={classes.fav} />
            <Typography color="textSecondary" variant="subtitle2">
              Favorites
            </Typography>
          </IconButton>
        </div>
        <div className={classes.container}>
          <IconButton onClick={() => handleClick("Likes")}>
            <FavoriteIcon className={classes.like} />
            <Typography color="textSecondary" variant="subtitle2">
              Likes
            </Typography>
          </IconButton>
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default Section;
