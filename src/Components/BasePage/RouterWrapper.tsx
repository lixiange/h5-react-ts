import React from "react";
import { BrowserRouter, HashRouter, } from "react-router-dom";
import config from "../../config";

export default function RouterWrapper(props:any) {
  
  return config.hashRouter ? (
    <HashRouter {...props}>{props.children}</HashRouter>
  ) : (
    <BrowserRouter {...props}>{props.children}</BrowserRouter>
  );
}
