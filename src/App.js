import React from "react";
import { createGlobalStyle } from "styled-components"; // 전역 속성을 정의해주는 전역선택자
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import ErrorPage from "./components/common/ErrorPage";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

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
    color: #000;
  }
`;
function App() {
  return (
    <>
      <Global />
      {/* Switch : 가장 위에있는 Route부터 실행하되, 일치하는 path가 없으면 다음 Route를 실행해준다.
                   일치하는 path가 있어서 Route가 실행되면 Switch를 빠져나간다. */}
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/search/:text" component={Search} />
        <Route path="/detail/:isbn" component={Detail} />
        <Route component={ErrorPage} />
        {/* <Main /> */}
      </Switch>
    </>
  );
}

export default App;
