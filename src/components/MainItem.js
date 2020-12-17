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

export default function MainItem({
  data: { coverLargeUrl, title, author, customerReviewRank },
}) {
  //   const { img, title, author, customerReviewRank } = data; // 비구조화할당
  return (
    <ItemBox>
      <div>
        <img src={coverLargeUrl} alt="Book Cover" />
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
      <i>
        {customerReviewRank > 9 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        )}
        {customerReviewRank > 8 && customerReviewRank <= 9 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalfOutline />
          </>
        )}
        {customerReviewRank > 7 && customerReviewRank <= 8 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalfOutline />
            <TiStarOutline />
          </>
        )}
        {customerReviewRank > 6 && customerReviewRank <= 7 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {customerReviewRank > 5 && customerReviewRank <= 6 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalfOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {customerReviewRank > 4 && customerReviewRank <= 5 && (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {customerReviewRank > 3 && customerReviewRank <= 4 && (
          <>
            <TiStarFullOutline />
            <TiStarHalfOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {customerReviewRank > 2 && customerReviewRank <= 3 && (
          <>
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </>
        )}
        {customerReviewRank <= 2 && (
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
