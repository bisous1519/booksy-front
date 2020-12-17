import React from "react";
import { Inner } from "./Header";
import styled from "styled-components";
import MainItem from "./MainItem";
import IMG1 from "../assets/img/book01.png";
import IMG2 from "../assets/img/book02.png";
import IMG3 from "../assets/img/book03.png";
import IMG4 from "../assets/img/book04.png";
import IMG5 from "../assets/img/book05.png";
import IMG6 from "../assets/img/book06.png";

const ListContainer = styled(Inner)`
  h2 {
    margin: 40px 0 30px 0;
    font-size: 22px;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
`;

const fakeData = [
  { id: 1, img: IMG1, title: "책제목", author: "책작가", vote: 8 },
  { id: 2, img: IMG2, title: "책제목", author: "책작가", vote: 9 },
  { id: 3, img: IMG3, title: "책제목", author: "책작가", vote: 5 },
  { id: 4, img: IMG4, title: "책제목", author: "책작가", vote: 2 },
  { id: 5, img: IMG5, title: "책제목", author: "책작가", vote: 4 },
  { id: 6, img: IMG6, title: "책제목", author: "책작가", vote: 10 },
];

export default function MainList() {
  return (
    <ListContainer>
      <h2>Popular Now</h2>
      <ul>
        {fakeData.map((v) => (
          <MainItem data={v} key={v.id} />
        ))}
      </ul>
    </ListContainer>
  );
}
