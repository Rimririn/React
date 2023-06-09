import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, Route, Switch, withRouter } from "react-router-dom";
import BookPage from "./BookPage";
import HomePage from "./HomePage";
import LocalPage from "./LocalPage";
import LoginPage from "./LoginPage";
import JoinPage from "./JoinPage";
import MyPage from "./MyPage";

const RouterPage = ({ history }) => {
  const onLogout = () => {
    sessionStorage.removeItem("email");
    history.push("/");
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/book">LOGO</Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100%" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/book">도서검색</Link>
              <Link to="/local">지역검색</Link>
            </Nav>
            <div>
              {sessionStorage.getItem("email") ? (
                <>
                  <Link to="/mypage">{sessionStorage.getItem("email")}</Link>
                  <Link to="/login" onClick={onLogout}>
                    로그아웃
                  </Link>
                </>
              ) : (
                <Link to="/login">로그인</Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/book" component={BookPage} />
        <Route path="/local" component={LocalPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </>
  );
};

export default withRouter(RouterPage);
