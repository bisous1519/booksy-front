import React from "react";
import styled from "styled-components";
import { Inner } from "./Header";
import BANNER_IMG from "../assets/img/banner.png";

const BannerBox = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 20px;
  position: relative;
  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: #f1e9e9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding-left: 50px;
    h1 {
      margin-top: 50px;
      display: block;
      width: 45%;
      color: #291d70;
      font-size: 25px;
      /* font-weight: bold; */
    }
    p {
      margin-top: 30px;
      display: block;
      width: 45%;
      color: #151515;
    }
    button {
      margin-top: 20px;
      width: 70px;
      height: 30px;
      background: #c0a498;
      color: #fff;
      border-radius: 3px;
      border: none;
      outline: none;
      cursor: pointer;
      &:hover {
        background: #c9afa4;
      }
    }
  }
  img {
    position: absolute;
    right: 0;
    bottom: 10px;
    height: 100%;
  }
`;

export default function Banner() {
  return (
    <Inner>
      <BannerBox>
        <div>
          <h1>Build your library</h1>
          <p>Buy two selected books and get One for free</p>
          <button>View all</button>
        </div>
        <img src={BANNER_IMG} alt="banner_img" />
      </BannerBox>
    </Inner>
  );
}
