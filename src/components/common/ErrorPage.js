import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import IMG from "../../assets/img/404page.gif";

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eae9e8;
  flex-direction: column;
  z-index: 9999;
  position: fixed;
  top: 0;
  img {
    height: 70%;
  }
  div {
    display: flex;
    gap: 100px;
    i {
      position: absolute;
      top: 23%;
      right: 37%;
      display: block;
      width: 7%;
      height: 16%;
      background: #000;
      opacity: 0;
      cursor: pointer;
    }
    a,
    span {
      padding: 5px;
      font-size: 16px;
      color: #555;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

function ErrorPage({ history }) {
  const goBack = () => {
    history.goBack();
  };
  return (
    <ErrorContainer>
      <img src={IMG} alt="404page" />
      <div>
        <i onClick={goBack}>홈</i>
        <Link to="/">홈으로</Link>
        <span onClick={goBack}>뒤로가기</span>
      </div>
    </ErrorContainer>
  );
}

export default withRouter(ErrorPage); // 라우터를 쓰지 않은곳에서도 {history}를 가져올 수 있도록 ErrorPage를 withRouter로 한번 감싸준다.
