import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_BEST_REQUEST":
      return {
        // ...state,
        loading: true,
        success: false,
        error: false,
      };
    case "LOAD_BEST_SUCCESS":
      return {
        loading: false,
        success: action.payload,
        error: false,
      };
    case "LOAD_BEST_ERROR":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      throw new Error("unhandled action type");
  }
}

export default function useAsync(callBack, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    success: false,
    error: false,
  });

  async function fetchData() {
    dispatch({ type: "LOAD_BEST_REQUEST" }); // 일단 시작했으니 로딩중! 이제 try를 해볼차례
    try {
      const response = await callBack(); // response : 성공한 결과값인 객체나 배열이 담겨옴
      dispatch({ type: "LOAD_BEST_SUCCESS", payload: response.data });
    } catch (e) {
      dispatch({ type: "LOAD_BEST_ERROR", payload: e });
    }
  }
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, deps);
  //   deps 자리에 오는 어떤 배열변수가 값이 바뀔때마다 fetchData()가 다시 실행되도록 해줌.

  return [state]; // [state, fetch] : fetch()를 한번 더 실행(ex> 새로고침) 해줄수도 있는 경우 대비. 지금은 안해도됨?
}
