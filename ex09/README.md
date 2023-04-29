# 인하대학교 VR/AR

인하대 VR/AR 리엑트 9주차 강의

## 강의 요약

- 홈페이지 실행 주소
  [https://helen-cho.github.io/ex06/](https://helen-cho.github.io/ex06/)

- 소스 주소
  [https://github.com/helen-cho/ex06](https://github.com/helen-cho/ex07)

### `라이브러리 설치`

    yarn add react-bootstrap bootstrap axios react-router-dom@5.3.0

### `카카오 지역검색 API `

- LocalPage.jsx 파일
- 카카오 개발자 문서 : 지역 검색 REST API
- [https://developers.kakao.com/docs/latest/ko/local/dev-guide](https://developers.kakao.com/docs/latest/ko/local/dev-guide)

- MapPage.jsx
- 리엑트 부트스트랩 모달
- 지도 출력 : 카카오 지도 API [https://apis.map.kakao.com/web/guide/](https://apis.map.kakao.com/web/guide/)

- yarn add react-kakao-maps-sdk

- 사용 예시

        import { Map, MapMarker } from "react-kakao-maps-sdk";

        <Map
          center={{ lat: local.y, lng: local.x }}
          style={{ width: "100%", height: "360px" }}
        >
          <MapMarker position={{ lat: local.y, lng: local.x }}>
              <div style={{ color: "#000" }}>{local.address_name}
              </div>
          </MapMarker>
        </Map>
