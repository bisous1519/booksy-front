import React from "react";
import styled from "styled-components";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

const ItemBox = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 140px;
  div {
    transition: all 0.3s;
    width: 140px;
    height: 205px;
    box-shadow: 3px 3px 5px lightgray;
    margin-bottom: 10px;
    cursor: pointer;
    img {
      border-radius: 3px;
      width: 100%;
      height: 100%;
    }
    &:hover {
      transform: translateY(-5px) rotate(3deg);
      box-shadow: 8px 8px 5px lightgray;
    }
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
  }
  p {
    font-size: 13px;
  }
  i {
    padding: 0 3px;
    display: flex;
    justify-content: space-evenly;
    color: #291d70;
  }
`;

export default function MainItem({ data: { img, title, author, vote } }) {
  //   const { img, title, author, vote } = data; // 비구조화할당
  return (
    <ItemBox>
      <div>
        <img src={img} alt="Book Cover" />
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
      <i>
        {vote > 9 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        )}
        {vote > 8 && vote <= 9 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalfOutline />
          </>
        )}
        {vote > 7 && vote <= 8 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalfOutline />
            <TiStarOutline />
          </>
        )}
        {vote > 6 && vote <= 7 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {vote > 5 && vote <= 6 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalfOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {vote > 4 && vote <= 5 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {vote > 3 && vote <= 4 && (
          <>
            <TiStarFullOutline />
            <TiStarHalfOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {vote > 2 && vote <= 3 && (
          <>
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {vote <= 2 && (
          <>
            <TiStarHalfOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
      </i>
    </ItemBox>
  );
}
