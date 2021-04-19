import React, { useState } from "react";

import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

import Masonry from "react-masonry-css";
import "./Giphy.css";

import GifCard from "./GifCard";

// use @giphy/js-fetch-api to fetch gifs, instantiate with api key
const giphyFetch = new GiphyFetch("rigshM5l1AUPQMqbPHTgetg54n62pCCj");

const Giphy = (props) => {
  const [gifs, setGifs] = useState(null);
  let breakpointColumnsObj = { default: 7 };
  let gifWidth = 200;
  for (let i = 2 * gifWidth; i < 1600; i += gifWidth) {
    breakpointColumnsObj[i] = i / gifWidth - 1;
  }

  // configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
  const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 100 });
  fetchGifs().then((gifs) => setGifs(gifs.data));
  console.log(gifs);
  if (gifs) {
    const newGifs = gifs.map((gif, index) => (
      <div key={index}>
        <GifCard>
          <Gif key={gif.id} gif={gif} width={gifWidth} noLink={true} />
        </GifCard>
      </div>
    ));

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {newGifs}
      </Masonry>
    );
  } else {
    return false;
  }

  // return gifs && gifs.map((gif) => <Gif key={gif.id} gif={gif} width={200} />);

  // return <Grid width={800} columns={5} fetchGifs={fetchGifs} />;
  // return gif && <Gif gif={gif} width={200} />;
};

export default Giphy;
