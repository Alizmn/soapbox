import React from "react";
import { makeStyles, CardActions, IconButton, Card } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import StarsIcon from "@material-ui/icons/Stars";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 0,
  },
  like: { color: "red" },
  unLike: { color: "grey" },
  favorite: { color: "yellow" },
  unFavorite: { color: "grey" },
}));

const GifCard = (props) => {
  const classes = useStyles();

  const handleLike = () => {
    if (props.liked) {
      const removed = props.likes.filter((value) => value.id !== props.gif.id);
      props.setLikes(removed);
    } else {
      props.setLikes([...props.likes, props.gif]);
    }
  };

  const handleFavorite = () => {
    console.log("Favorites GIFS", props.favs);
    if (props.faved) {
      const removed = props.favs.filter((value) => value.id !== props.gif.id);
      props.setFavs(removed);
    } else {
      props.setFavs([...props.favs, props.gif]);
    }
  };

  return (
    <Card className={classes.root}>
      {props.children}
      <CardActions className={classes.actions} disableSpacing>
        <IconButton
          aria-label="like"
          className={props.liked ? classes.like : classes.unLike}
          onClick={handleLike}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="favorite"
          className={props.faved ? classes.favorite : classes.unFavorite}
          onClick={handleFavorite}
        >
          <StarsIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default GifCard;
