import React, { useState, useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";

const StuInsert = ({ setStudents, students }) => {
  const last = useRef(5);
  const [form, setForm] = useState({
    no: last.current,
    name: "고진호",
    dept: "소융과",
  });

  const { no, name, dept } = form;

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onRegister = (e) => {
    e.preventDefault();
    if (window.confirm(`${name} 상품을 등록하시겠습니까?`)) {
      setStudents(students.concat(form));
      setForm({ no: ++last.current, name: "", dept: "" });
    }
  };

  return (
    <Card className="my-3">
      <Card.Title className="text-center py-2">
        <h3>학생등록</h3>
      </Card.Title>
      <Card.Body>
        <Form className="text-center" onSubmit={onRegister}>
          <Form.Control
            onChange={onChangeForm}
            value={no}
            name="no"
            className="my-2"
            placeholder="학번"
          />
          <Form.Control
            onChange={onChangeForm}
            value={name}
            name="name"
            className="my-2"
            placeholder="이름"
          />
          <Form.Control
            onChange={onChangeForm}
            value={dept}
            name="price"
            className="my-2"
            placeholder="학과"
          />
          <Button type="submit">학생등록</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default StuInsert;
