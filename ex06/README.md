# 인하대학교 VR/AR

인하대 VR/AR 리엑트 6주차 강의

## 강의 요약

- 홈페이지 실행 주소
  [https://helen-cho.github.io/ex06/](https://helen-cho.github.io/ex06/)

- 소스 주소
  [https://github.com/helen-cho/ex06](https://github.com/helen-cho/ex06)

### `라이브러리 설치`

    yarn add react-bootstrap bootstrap axios react-router-dom@5.3.0

### `카카오 책 검색 API`

    import axios from "axios";

    const getBooks = async () => {
        const url = "https://dapi.kakao.com/v3/search/book?target=title";
        const config = {
        headers: { Authorization: "KakaoAK 1516d2c502f56b88f702da4d62d772a5" },
        params: { query: "리엑트", size: 6, page: 1 },
        };

        const result = await axios.get(url, config);
        console.log(result);
    };

- url과 config 값을 설정하고 비동기 통신을 async , await를 이용하여 동기적으로 처리

- 카카오 개발자 문서 : 책 검색 REST API [https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide)
