// server/server.ts
import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../client/components/app";
import { Page1 } from "../client/components/page1";
const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use("/", express.static(path.join(__dirname, "static"))); // 애플리케이션 단계에서 url을 분기처리하는 것
server.use("/page1", express.static(path.join(__dirname, "static"))); // 애플리케이션 단계에서 url을 분기처리하는 것

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8",
);
const assets = JSON.parse(manifest);

server.get("/", (req, res) => { // 라우터 단계에서 url을 제어하도록 하는 것
  const component = ReactDOMServer.renderToString(React.createElement(App));
  res.render("client", { assets, component });
});

server.get("/page1", (req, res) => {
  const component = ReactDOMServer.renderToString(React.createElement(Page1));
  res.render("page1", { assets, component });
});

server.listen(3000, ()=>{
    console.log('??')
})