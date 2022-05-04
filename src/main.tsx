import React from "react";
import ReactDOM from "react-dom/client";
import Renderer from "./Renderer";

const view: any = {
  tagName: "div",
  dataset: {
    a:1,
  },
  children: [
    {
      tagName: "img",
      dataset: {
        src: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDNfMTIz/MDAxNTgwNjY4MjQ3ODUy.FXm9uLmW7_-ihsTCZVdbp2YBy3-5n6pcQfpjil8K7ksg.mBzdkohV_OpHImvA5jjSd5bD9IorwxmF2FvRPkK78lUg.JPEG.westar4501/2%EC%9B%94_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_%EB%8B%AC%EB%A0%A5_x.jpg?type=w800",
        alt: "",
      },
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Renderer view={view} />
);
