import React, { useEffect, useState } from "react";

import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

import Masonry from "react-masonry-css";
import "./Giphy.css";

import GifCard from "./GifCard";

import InfiniteScroll from "react-infinite-scroll-component";

require("dotenv").config();

// use @giphy/js-fetch-api to fetch gifs, instantiate with api key
const giphyFetch = new GiphyFetch(`${process.env.REACT_APP_API}`);

const Giphy = ({ status, search }) => {
  const [gifs, setGifs] = useState([]);
  const [searchGifs, setSearchGifs] = useState([]);
  const [favs, setFavs] = useState([]);
  const [likes, setLikes] = useState([]);
  const [offset, setOffset] = useState(0);
  //   -------------------------------------------------
  //  | define the git width and number in each render  |
  //   -------------------------------------------------
  const gifWidth = 200;
  const gifNumber = 30;
  //  Search for gifs
  const fetchSearchGifs = (offset) =>
    giphyFetch.search(search, { offset, limit: gifNumber });

  //  Fetching Trend gifs
  const fetchTrendGifs = (offset) =>
    giphyFetch.trending({ offset, limit: gifNumber });

  // Responsive column for better user experience
  let breakpointColumnsObj = { default: 7 };
  for (let i = 2 * gifWidth; i < 1600; i += gifWidth) {
    breakpointColumnsObj[i] = i / gifWidth - 1;
  }

  useEffect(() => {
    if (search.length > 0) {
      fetchSearchGifs().then((result) => setSearchGifs(result.data));
    } else {
    }
  }, [search]);

  useEffect(() => {
    switch (status) {
      case "Search":
        fetchSearchGifs(offset).then((result) =>
          setSearchGifs([...searchGifs, ...result.data])
        );
        break;

      case "Trending":
        fetchTrendGifs(offset).then((result) =>
          setGifs([...gifs, ...result.data])
        );
        break;
      default:
        break;
    }
  }, [offset]);

  const handleNext = () => {
    setOffset(offset + gifNumber);
    //  ^-----------this function would run after scrolling
  };

  let newGifs = <div></div>;
  //  Main function to organize sections
  const handelMap = (inventory, statusInput) => {
    let likeStat = false;
    let favStat = false;
    newGifs = inventory.map((gif, index) => {
      if (statusInput !== "Favorites" && favs.length > 0)
        // check if the gif is in favorites
        favStat = favs.find((fav) => {
          if (fav.id === gif.id) return true;
          return false;
        })
          ? true
          : false;

      if (statusInput !== "Likes" && likes.length > 0)
        // check if the gif is in liked ones
        likeStat = likes.find((like) => {
          if (like.id === gif.id) return true;
          return false;
        })
          ? true
          : false;

      return (
        <div key={index}>
          <GifCard
            gif={gif}
            likes={likes}
            favs={favs}
            liked={statusInput === "Likes" ? true : likeStat}
            faved={statusInput === "Favorites" ? true : favStat}
            setFavs={setFavs}
            setLikes={setLikes}
          >
            <Gif key={gif.id} gif={gif} width={gifWidth} noLink={true} />
          </GifCard>
        </div>
      );
    });
    return newGifs;
  };

  switch (status) {
    case "Search":
      handelMap(searchGifs, "Search");
      break;
    case "Trending":
      handelMap(gifs, "Trending");
      break;
    case "Likes":
      handelMap(likes, "Likes");
      break;
    case "Favorites":
      handelMap(favs, "Favorites");
      break;
    default:
      break;
  }

  return (
    <InfiniteScroll
      dataLength={newGifs.length}
      next={handleNext}
      hasMore={true}
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {newGifs}
      </Masonry>
    </InfiniteScroll>
  );
};

export default Giphy;
