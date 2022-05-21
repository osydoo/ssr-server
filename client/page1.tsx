import React from "react";
import ReactDom from "react-dom";
import { Page1 } from "./components/page1";

ReactDom.hydrate(<Page1 />, document.getElementById("root"));
