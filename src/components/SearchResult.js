import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import ErrorPage from "./common/ErrorPage";
import MainItem from "./MainItem";
import { ListContainer } from "./MainList";
// 그냥 : export default 해놓은 컴포넌트를 가져옴
// {} : export default 안에있는, export 해놓은 애를 가져옴 => 비구조화할당!

// const fetchSearch = async (text) => {
//   return await axios.get(
//     `/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${text}&output=json`
//     // &output=json : xml로 날아오는 데이터를 자바스크립트로 변환해줌
//   );
// };

function SearchResult({ match }) {
  //   console.log(match);

  const fetchSearch = async () => {
    return await axios.get(
      `/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${match.params.text}&output=json`
      // &output=json : xml로 날아오는 데이터를 자바스크립트로 변환해줌
    );
  };
  const [{ loading, success, error }] = useAsync(fetchSearch, [
    match.params.text,
  ]); // 업데이트된 상태를 관찰해주기 위해 배열을 같이 넘겨준다
  //   const [{ loading, success, error }] = useAsync(() =>
  //     fetchSearch(match.params.text)
  //   );
  console.log(loading, success, error);

  if (loading) return <div>로딩중!</div>;
  if (error) return <ErrorPage />;
  if (!success) return null;

  return (
    <ListContainer>
      <h2>
        {match.params.text}에 대한 검색 결과는 {success.item.length}개 입니다.
      </h2>
      <ul>
        {success.item.map((v) => (
          <MainItem data={v} key={v.itemId} />
        ))}
      </ul>
    </ListContainer>
  );
}
export default withRouter(SearchResult);
