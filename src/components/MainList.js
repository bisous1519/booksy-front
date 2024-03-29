import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Inner } from "./Header";
import MainItem from "./MainItem";
import useAsync from "../hooks/useAsync";
import ErrorPage from "./common/ErrorPage";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// import IMG1 from "../assets/img/book01.png";
// import IMG2 from "../assets/img/book02.png";
// import IMG3 from "../assets/img/book03.png";
// import IMG4 from "../assets/img/book04.png";
// import IMG5 from "../assets/img/book05.png";
// import IMG6 from "../assets/img/book06.png";

// const fakeData = [
//   { id: 1, img: IMG1, title: "책제목", author: "책작가", vote: 8 },
//   { id: 2, img: IMG2, title: "책제목", author: "책작가", vote: 9 },
//   { id: 3, img: IMG3, title: "책제목", author: "책작가", vote: 5 },
//   { id: 4, img: IMG4, title: "책제목", author: "책작가", vote: 2 },
//   { id: 5, img: IMG5, title: "책제목", author: "책작가", vote: 4 },
//   { id: 6, img: IMG6, title: "책제목", author: "책작가", vote: 10 },
// ];

export const ListContainer = styled(Inner)`
  h2 {
    margin: 50px 0 40px 0;
    font-size: 22px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const fetchBestSeller = async () => {
  return await axios.get(
    "/api/bestSeller.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&categoryId=100&output=json"
  );
  //   const response = await axios.get(
  //     "http://book.interpark.com/api/bestSeller.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&categoryId=100"
  //   );
  //   return response;
};

export default function MainList() {
  // const [state] = useAsync(fetchBestSeller);
  const [{ loading, success, error }] = useAsync(fetchBestSeller);
  console.log(loading, success, error);

  if (loading) return <div>로딩중!</div>;
  if (error) return <ErrorPage />;
  if (!success) return null;
  return (
    <ListContainer>
      <h2>Popular Now</h2>
      <ul>
        {success.item.map((v) => (
          <MainItem data={v} key={v.itemId} />
        ))}
      </ul>
      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 3, 750: 4, 850: 5, 999: 6 }}
      >
        <Masonry columnsCount="6">
          {success.item.map((v) => (
            <MainItem data={v} key={v.itemId} />
          ))}
        </Masonry>
      </ResponsiveMasonry> */}

      {/*  // styled-component 내용
        ${Masonry} {
            div {
                align-items: center;
                justify-content: center;
            }
        } 
      */}
    </ListContainer>
  );
}
