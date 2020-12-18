import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    {/* // <React.StrictMode>   // 얘까지 감싸줘도 되긴 하지만 얜 디버그할때 쓰는거니까 필요없어서 지우고 */}
    <App />
    {/* // </React.StrictMode>, */}
  </BrowserRouter>,
  document.getElementById("root")
);
