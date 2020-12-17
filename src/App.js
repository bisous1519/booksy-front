import React from "react";
import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components"; // 전역 속성을 정의해주는 전역선택자

const Global = createGlobalStyle`
  html{
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
`;
function App() {
  return (
    <>
      <Global />
      <Main />
    </>
  );
}

export default App;
