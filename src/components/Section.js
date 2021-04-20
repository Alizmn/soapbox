import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarsIcon from "@material-ui/icons/Stars";
import IconButton from "@material-ui/core/IconButton";

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

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.container}>
          <IconButton
            onClick={() => {
              setStatus("Trending");
              setSearch("");
            }}
          >
            <WhatshotIcon className={classes.trend} />
            <Typography color="textSecondary" variant="subtitle2">
              Trending
            </Typography>
          </IconButton>
        </div>
        <div className={classes.container}>
          <IconButton onClick={() => setStatus("Favorites")}>
            <StarsIcon className={classes.fav} />
            <Typography color="textSecondary" variant="subtitle2">
              Favorites
            </Typography>
          </IconButton>
        </div>
        <div className={classes.container}>
          <IconButton onClick={() => setStatus("Likes")}>
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
