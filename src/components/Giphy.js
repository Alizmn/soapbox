import React, { useState } from "react";

import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

import Masonry from "react-masonry-css";
import "./Giphy.css";

import GifCard from "./GifCard";

// use @giphy/js-fetch-api to fetch gifs, instantiate with api key
const giphyFetch = new GiphyFetch("rigshM5l1AUPQMqbPHTgetg54n62pCCj");

const Giphy = ({ status }) => {
  const [gifs, setGifs] = useState([]);
  const [favs, setFavs] = useState([]);
  const [likes, setLikes] = useState([]);

  const gifWidth = 200;
  const gifNumber = 50;

  let breakpointColumnsObj = { default: 7 };
  for (let i = 2 * gifWidth; i < 1600; i += gifWidth) {
    breakpointColumnsObj[i] = i / gifWidth - 1;
  }

  const fetchGifs = (offset) =>
    giphyFetch.trending({ offset, limit: gifNumber });
  fetchGifs().then((gifs) => setGifs(gifs.data));

  // console.log(gifs);

  let newGifs = <div></div>;
  let likeStat = false;
  let favStat = false;
  switch (status) {
    case "Trending":
      newGifs = gifs.map((gif, index) => {
        // check if the gif is in favorites
        if (favs.length > 0)
          favStat = favs.find((fav) => {
            if (fav.id === gif.id) return true;
          })
            ? true
            : false;
        // console.log("FAV STAT", favStat);
        if (likes.length > 0)
          likeStat = likes.find((like) => {
            // console.log("like,gif", like.id, gif.id);
            if (like.id === gif.id) return true;
          })
            ? true
            : false;
        // console.log("LIKE STAT22", likeStat);
        return (
          <div key={index}>
            <GifCard
              gif={gif}
              likes={likes}
              favs={favs}
              liked={likeStat}
              faved={favStat}
              setFavs={setFavs}
              setLikes={setLikes}
            >
              <Gif key={gif.id} gif={gif} width={gifWidth} noLink={true} />
            </GifCard>
          </div>
        );
      });
      break;
    case "Likes":
      newGifs = likes.map((gif, index) => {
        // they are all liked but check for favorites
        if (favs.length > 0)
          favStat = favs.find((fav) => {
            if (fav.id === gif.id) return true;
          })
            ? true
            : false;
        // console.log("Going to likes", favStat);
        return (
          <div key={index}>
            <GifCard
              gif={gif}
              likes={likes}
              favs={favs}
              liked={true}
              faved={favStat}
              setFavs={setFavs}
              setLikes={setLikes}
            >
              <Gif key={gif.id} gif={gif} width={gifWidth} noLink={true} />
            </GifCard>
          </div>
        );
      });
      break;
    case "Favorites":
      newGifs = favs.map((gif, index) => {
        if (likes.length > 0)
          likeStat = likes.find((like) => {
            if (like.id === gif.id) return true;
          })
            ? true
            : false;
        return (
          <div key={index}>
            <GifCard
              gif={gif}
              likes={likes}
              favs={favs}
              liked={likeStat}
              faved={true}
              setFavs={setFavs}
              setLikes={setLikes}
            >
              <Gif key={gif.id} gif={gif} width={gifWidth} noLink={true} />
            </GifCard>
          </div>
        );
      });
      break;
  }
  // if (gifs) {
  //   const newGifs = gifs.map((gif, index) => (
  //     <div key={index}>
  //       <GifCard fav={fav} setFav={setFav} liked={liked} setLiked={setLiked}>
  //         <Gif key={gif.id} gif={gif} width={gifWidth} noLink={true} />
  //       </GifCard>
  //     </div>
  //   ));

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {newGifs}
    </Masonry>
  );
  // } else {
  //   return <div>Loading ...</div>;
  // }
};

export default Giphy;
