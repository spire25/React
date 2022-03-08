import AxiosGet from "./components/AxiosGet"
import AxiosPost from "./components/AxiosPost";
import AxiosDelete from "./components/AxiosDelete";
import FetchGet from "./components/FetchGet";
import FetchPost from "./components/FetchPost";
import FetchDelete from "./components/FetchDelete";

function App() {
  return (
    <div className="App">
      <p>Spring start!</p>

      {/* <AxiosGet /> */}
      {/* <AxiosPost /> */}
      {/* <AxiosDelete /> */}

      {/* <FetchGet /> */}
      {/* <FetchPost /> */}
      <FetchDelete />
    </div>
  );
}

export default App;


/*

Fetch()는 내장 lib
Axios 는 설치후 사용

왜 사용해야하는가? S찾아볼 것

-> 일단 더 좋지 않을까?
아니라면 굳이 왜 설치해서 사용할까?


1. Fetch()
  1) 내장 라이브러리

  3) 장점
    (1) 내장 라이브러리.. import할 필요없음
    (2) 내장 라이브러리.. 프레임워크가 안정적이지 않을 때 좋음
    (3) promise 기반으로 다루기 쉬움
  4) 단점
    (1) internet explorer의 경우 지원하지 않음 ( 호환성 떨어짐 )
    (2) 기능 부족

2. Axios
  1) node.js와 브라우저를 위한 HTTP 통신 라이브러리
  2) return: promise 객체
  
  3) 장점
    (1) 크로스 브라우징에 신경써, 브라우저 호환성이 좋음 
        좀 더 많은 브라우저에서 사용 가능
    (2) response timeout 처리 방법 ( 요청 취소, 타임아웃 걸기 )
    (3) promise 기반으로 다루기 쉬움
  4) 단점
    (1) 모듈 따로 설치, import 시켜주어야 함




*/

