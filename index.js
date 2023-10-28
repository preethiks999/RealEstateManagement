import React from "react";
import ReactDOM from "react-dom/client";

import RouterElement from "./src/RouterElement";

var root = document.getElementById("rootElement");
var rootElement = ReactDOM.createRoot(root);
rootElement.render(<RouterElement />);
