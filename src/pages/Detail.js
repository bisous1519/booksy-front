import React from "react";
import axios from "axios";
import styled from "styled-components";
import ErrorPage from "../components/common/ErrorPage";
import useAsync from "../hooks/useAsync";
import Header from "../components/Header";

const DetailBar = styled.ul`
  height: 40%;
  border-left: 1px solid #b2b2b2;
  position: fixed;
  top: 35%;
  right: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    width: 25px;
    height: 25px;
    background: #e1a993;
    color: #6c6c6c;
    font-size: 13px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
  }
`;

const DetailTopContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: #fff;

  h1 {
    text-align: center;
    margin: 40px 0 0px 0;
    font-size: 23px;
  }

  .container {
    z-index: 1;
    perspective: 3000px;

    .book {
      position: relative;
      display: block;
      width: 200px;
      height: 275px;
      margin: 5% auto;
      border-radius: 2px 4px 4px 2px;
      background: linear-gradient(45deg, #dad5dc 0%, #f2ebf4 100%);
      font-family: acumin-pro, sans-serif;
      box-shadow: 13px 13px 8px 0px rgba(151, 146, 153, 0.6);
      font-weight: 400;
      color: #2b2b2b;
      transform-style: preserve-3d;
      transition: transform 0.5s;

      &:hover {
        transform: rotate3d(0, 1, 0, 35deg);
      }

      > div {
        display: block;
        position: absolute;
      }
    }

    .front {
      > div {
        display: block;
        position: absolute;
        width: 200px;
        height: 275px;
      }
      .cover img {
        width: 100%;
        height: 100%;
      }

      transform-style: preserve-3d;
      transform-origin: 0% 50%;
      transition: transform 0.5s;
      transform: translate3d(0, 0, 20px);
      z-index: 10;
    }

    .left-side {
      width: 40px;
      left: -20px;
      height: 275px;
      background-color: rgba(232, 229, 234);
      transform: rotate3d(0, 1, 0, -90deg);
    }
  }

  .container {
    .front {
      > div {
        border-radius: 0 3px 3px 0;
        box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
      }

      &:after {
        content: "";
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: -1px;
        width: 1px;
      }
    }

    .cover:after {
      content: "";
      position: absolute;
      top: 0;
      left: 10px;
      bottom: 0;
      width: 3px;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
    }

    h2 {
      width: 275px;
      height: 30px;
      color: #2b2b2b;
      font-size: 15px;
      line-height: 40px;
      padding-right: 10px;
      text-align: right;
      transform-origin: 0 0;
      transform: rotate(90deg) translateY(-40px);
    }
  }

  .cover {
    background: linear-gradient(45deg, #dad5dc 0%, #f2ebf4 100%);
  }

  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    b {
      margin-bottom: 24px;
      font-size: 22px;
      font-weight: bold;
    }
    span {
    }
  }
`;
const DetailBottomContainer = styled.section`
  width: 100vw;
  height: 200vh;
  background: #f4f5ef;
`;

export default function Detail({ match, history }) {
  const fetchDetail = async () => {
    // const response = await axios.get(
    return await axios.get(
      `/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${match.params.isbn}&output=json&queryType=isbn`
    );
  };
  const [{ loading, success: data, error }] = useAsync(fetchDetail);
  // success 는 data로 이름을 바꿔서 들어온다

  const goBack = () => {
    history.goBack();
  };
  if (loading) return <div>로딩중..</div>;
  if (error) return <ErrorPage />;
  if (!data) return null;
  console.log(data);

  let fontStyle;

  const computedData = () => {
    if (data.item[0].title.length > 12) {
      fontStyle = {
        fontSize: "10px",
      };
    } else if (data.item[0].title.length > 18) {
      fontStyle = {
        fontSize: "10px",
      };
    } else {
      fontStyle = {
        fontSize: "15px",
      };
    }
  };
  computedData();
  return (
    <>
      <Header />
      {/* <div>{match.params.isbn}</div>{" "}
      App.js의 Route에서 path="/datail/:isbn" 로 넘겨져온 :isbn 내용이 match.params.isbn 안에 담겨옴!
      <button onClick={goBack}>뒤로가기</button> */}
      <DetailTopContainer>
        <h1>Detail</h1>
        <div className="container">
          <div className="book">
            <div className="front">
              <div className="cover">
                <img src={data.item[0].coverLargeUrl} alt="" />
              </div>
            </div>
            <div className="left-side">
              <h2>Booksy</h2>
            </div>
          </div>
        </div>
        <article>
          <b>{data.item[0].title}</b>
          <span>{data.item[0].author}</span>
        </article>
      </DetailTopContainer>
      <DetailBottomContainer></DetailBottomContainer>
      <DetailBar>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </DetailBar>
    </>
  );
}
