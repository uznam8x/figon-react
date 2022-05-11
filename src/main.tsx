import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Renderer from "./Renderer";
import canvas from "./sample/DAzq3YCAuJfj5frKjemAW2.json";
import axios from "axios";
import useSWR from "swr";
import Context from "./context";
import "./styles.css";

const compile = (template: string, data: any) => {
  return template.replace(/(\{([^\}]+)\})/g, ($1) => {
    const match = $1.replace(/\{/g, "").replace(/\}/g, "");
    return match.split(".").reduce((a: any, b: any) => {
      return a.hasOwnProperty(b) ? a[b] : "";
    }, data);
  });
};

const Async = function ({ dataset, style, children }: any) {
  const option = {
    cpid: 100915,
  };
  const url = compile(dataset.url, option);
  const { data } = useSWR(url, (url) =>
    axios({ baseURL: "https://stage-api.hsmoa.com", url, method: "get" }).then(
      (res) => res.data
    )
  );

  if (!data) return <div>loading...</div>;
  return (
    <Context.Provider value={data}>
      <section {...{ style }}>{children}</section>
    </Context.Provider>
  );
};

const view = canvas.artboards["2:2"];
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Renderer view={view} components={{ async: Async, Async }} />
);
