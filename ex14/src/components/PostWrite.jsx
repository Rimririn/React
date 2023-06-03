import moment from "moment";
import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { app } from "../firebaseInit";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const PostWrite = ({ history }) => {
  const db = getFirestore(app);

  const [form, setForm] = useState({
    email: sessionStorage.getItem("email"),
    title: "리엑트란?",
    body: "프론트페이지를 작성하는 언어입니다.",
    date: "",
  });

  const { email, title, body, date } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || body === "") {
      alert("제목 또는 내용을 입력해주세요.");
    } else {
      //firebase에 저장
      if (window.confirm("저장하실래요?")) {
        setForm({
          ...form,
          date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        });
        console.log(form);

        await addDoc(collection(db, "posts"), {
          ...form,
          date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        });
        history.push("/posts");
      }
    }
  };

  return (
    <Row className="my-5">
      <Col>
        <h1 className="text-center mb-5">글쓰기</h1>
        <Form>
          <Form.Control
            className="my-2"
            placeholder="제목입력"
            value={title}
            name="title"
            onChange={onChange}
          />
          <Form.Control
            as="textarea"
            rows={10}
            className="my-2"
            placeholder="내용입력"
            value={body}
            name="body"
            onChange={onChange}
          />
          <div className="text-center my-3">
            <Button onClick={onSubmit} className="mx-2 px-5">
              글등록
            </Button>
            <Button className="mx-2 px-5" variant="secondary">
              취소
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default PostWrite;
