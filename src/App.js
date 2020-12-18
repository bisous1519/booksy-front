import React from "react";
import Main from "./pages/Main";
import ErrorPage from "./components/common/ErrorPage";
import { createGlobalStyle } from "styled-components"; // 전역 속성을 정의해주는 전역선택자
import { Route, Switch } from "react-router-dom";

const Global = createGlobalStyle`
  html{
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`;
function App() {
  return (
    <>
      <Global />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route component={ErrorPage} />
        {/* <Main /> */}
      </Switch>
    </>
  );
}

export default App;
