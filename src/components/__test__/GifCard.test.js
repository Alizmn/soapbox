import React from "react";

import { render, cleanup } from "@testing-library/react";

import GifCard from "../GifCard";
import { Gif } from "@giphy/react-components";

afterEach(cleanup);

describe("A card includes a gif", () => {
  //  a gif example from GIPHY
  const gif = {
    type: "gif",
    id: "7YCA4XbA0ArQuWEfqJ",
    url: "https://giphy.com/gifs/reaction-mood-7YCA4XbA0ArQuWEfqJ",
    slug: "reaction-mood-7YCA4XbA0ArQuWEfqJ",
    bitly_gif_url: "http://gph.is/2IhML9r",
    bitly_url: "http://gph.is/2IhML9r",
    embed_url: "https://giphy.com/embed/7YCA4XbA0ArQuWEfqJ",
    username: "",
    source: "",
    title: "Cat Reaction GIF by MOODMAN",
    rating: "g",
    content_url: "",
    source_tld: "",
    source_post_url: "",
    is_sticker: false,
    import_datetime: "2018-03-11 18:37:48",
    trending_datetime: "2021-04-20 23:30:11",
    images: {
      original: {
        height: 332,
        width: 338,
        size: "5252470",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy.gif&ct=g",
        mp4_size: "1610583",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy.mp4&ct=g",
        webp_size: "1452990",
        webp:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy.webp?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy.webp&ct=g",
        frames: "90",
        hash: "9fd900987f88298728dce19c4154b436",
      },
      downsized: {
        height: 332,
        width: 338,
        size: "1512684",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy-downsized.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy-downsized.gif&ct=g",
      },
      downsized_large: {
        height: 332,
        width: 338,
        size: "5252470",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy.gif&ct=g",
      },
      downsized_medium: {
        height: 332,
        width: 338,
        size: "3128261",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy-downsized-medium.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy-downsized-medium.gif&ct=g",
      },
      downsized_small: {
        height: 146,
        width: 148,
        mp4_size: "78515",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy-downsized-small.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy-downsized-small.mp4&ct=g",
      },
      downsized_still: {
        height: 332,
        width: 338,
        size: "39172",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy-downsized_s.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy-downsized_s.gif&ct=g",
      },
      fixed_height: {
        height: 200,
        width: 204,
        size: "1466155",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200.gif&ct=g",
        mp4_size: "248268",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200.mp4&ct=g",
        webp_size: "514958",
        webp:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200.webp?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200.webp&ct=g",
      },
      fixed_height_downsampled: {
        height: 200,
        width: 204,
        size: "110003",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200_d.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200_d.gif&ct=g",
        webp_size: "66180",
        webp:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200_d.webp?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200_d.webp&ct=g",
      },
      fixed_height_small: {
        height: 100,
        width: 102,
        size: "463047",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/100.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=100.gif&ct=g",
        mp4_size: "82804",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/100.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=100.mp4&ct=g",
        webp_size: "185492",
        webp:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/100.webp?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=100.webp&ct=g",
      },
      fixed_height_small_still: {
        height: 100,
        width: 102,
        size: "5733",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/100_s.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=100_s.gif&ct=g",
      },
      fixed_height_still: {
        height: 200,
        width: 204,
        size: "16460",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200_s.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200_s.gif&ct=g",
      },
      fixed_width: {
        height: 196,
        width: 200,
        size: "1417466",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200w.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200w.gif&ct=g",
        mp4_size: "247648",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200w.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200w.mp4&ct=g",
        webp_size: "499756",
        webp:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200w.webp?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200w.webp&ct=g",
      },
      fixed_width_downsampled: {
        height: 196,
        width: 200,
        size: "105786",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200w_d.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200w_d.gif&ct=g",
        webp_size: "63478",
        webp:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200w_d.webp?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200w_d.webp&ct=g",
      },
      fixed_width_small: {
        height: 98,
        width: 100,
        size: "447527",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/100w.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=100w.gif&ct=g",
        mp4_size: "48468",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/100w.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=100w.mp4&ct=g",
        webp_size: "179612",
        webp:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/100w.webp?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=100w.webp&ct=g",
      },
      fixed_width_small_still: {
        height: 98,
        width: 100,
        size: "5620",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/100w_s.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=100w_s.gif&ct=g",
      },
      fixed_width_still: {
        height: 196,
        width: 200,
        size: "15987",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/200w_s.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=200w_s.gif&ct=g",
      },
      looping: {
        mp4_size: "4144654",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy-loop.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy-loop.mp4&ct=g",
        width: null,
        height: null,
      },
      original_still: {
        height: 332,
        width: 338,
        size: "66175",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy_s.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy_s.gif&ct=g",
      },
      original_mp4: {
        height: 470,
        width: 480,
        mp4_size: "1610583",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy.mp4&ct=g",
      },
      preview: {
        height: 202,
        width: 205,
        mp4_size: "35377",
        mp4:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy-preview.mp4?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy-preview.mp4&ct=g",
      },
      preview_gif: {
        height: 67,
        width: 68,
        size: "49734",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy-preview.gif?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy-preview.gif&ct=g",
      },
      preview_webp: {
        height: 128,
        width: 130,
        size: "38178",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/giphy-preview.webp?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=giphy-preview.webp&ct=g",
      },
      "480w_still": {
        height: 471,
        width: 480,
        size: "5252470",
        url:
          "https://media0.giphy.com/media/7YCA4XbA0ArQuWEfqJ/480w_s.jpg?cid=64de9503h3rbcmsz8m3h03eljp464rt9mkb1ocdsia7kyrlo&rid=480w_s.jpg&ct=g",
      },
    },
    analytics_response_payload:
      "e=Z2lmX2lkPTdZQ0E0WGJBMEFyUXVXRWZxSiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NjRkZTk1MDNoM3JiY21zejhtM2gwM2VsanA0NjRydDlta2Ixb2Nkc2lhN2t5cmxvJmN0PWdpZg",
    analytics: {
      onload: {
        url:
          "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTdZQ0E0WGJBMEFyUXVXRWZxSiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NjRkZTk1MDNoM3JiY21zejhtM2gwM2VsanA0NjRydDlta2Ixb2Nkc2lhN2t5cmxvJmN0PWdpZg&action_type=SEEN",
      },
      onclick: {
        url:
          "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTdZQ0E0WGJBMEFyUXVXRWZxSiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NjRkZTk1MDNoM3JiY21zejhtM2gwM2VsanA0NjRydDlta2Ixb2Nkc2lhN2t5cmxvJmN0PWdpZg&action_type=CLICK",
      },
      onsent: {
        url:
          "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTdZQ0E0WGJBMEFyUXVXRWZxSiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NjRkZTk1MDNoM3JiY21zejhtM2gwM2VsanA0NjRydDlta2Ixb2Nkc2lhN2t5cmxvJmN0PWdpZg&action_type=SENT",
      },
    },
    tags: [],
    is_anonymous: false,
    is_community: false,
    is_featured: false,
    is_hidden: false,
    is_indexable: false,
    is_preserve_size: false,
    is_realtime: false,
    is_removed: false,
    is_dynamic: false,
  };

  it("Should render if a gif pass through", () => {
    render(
      <GifCard gif={gif} likes={[gif]} favs={[gif]} liked={true} faved={false}>
        <Gif key={gif.id} gif={gif} width={200} noLink={true} />
      </GifCard>
    );
  });

  it("Should show red like if it was liked", () => {
    const { queryByLabelText } = render(
      <GifCard gif={gif} likes={[gif]} favs={[gif]} liked={true} faved={false}>
        <Gif key={gif.id} gif={gif} width={200} noLink={true} />
      </GifCard>
    );
    expect(queryByLabelText("like")).toHaveClass(
      "MuiButtonBase-root MuiIconButton-root makeStyles-like-7"
    );
  });

  it("Should show yellow favorite if it was in favorites", () => {
    const { queryByLabelText } = render(
      <GifCard gif={gif} likes={[gif]} favs={[gif]} liked={true} faved={true}>
        <Gif key={gif.id} gif={gif} width={200} noLink={true} />
      </GifCard>
    );
    expect(queryByLabelText("favorite")).toHaveClass(
      "MuiButtonBase-root MuiIconButton-root makeStyles-favorite-14"
    );
  });
});
