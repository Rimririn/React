# 인하대학교 VR/AR

인하대 VR/AR 5주차 강의

## 강의 요약

react-router-dom 이용한 페이지 이동
react-router-dom 5.3.0 버전 사용
yarn add react-router-dom@5.3.0

### `BrowserRouter`

    <BrowserRouter>
        <App />
    </BrowserRouter>

- BrowserRouter 태그로 App 컴포넌트를 감싸야 됨

### `Link`

    <Link to="/">HOME</Link>

- to에 입력한 경로로 이동 => url이 뒤에 추가가 됨
- / : 루트 경로

### `Route`

    <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/todos" component={TodosPage} />
    </Switch>

- Switch 태그로 감싸고 Route 태그로 경로에 따른 페이지 설정

- path : 경로, component : 렌더링 할 컴포넌트, exact : true 일 경우 주소가 완전히 같을 경우만 허용

### `useEffect`

    useEffect(() => {
        getPosts();
    }, []);

- 렌더링 될때 마다 호출
- [] 조건을 추가하여 처음 한번만 실행
- 특정 state가 변할 때 실행을 원할 경우 []에 값 추가
