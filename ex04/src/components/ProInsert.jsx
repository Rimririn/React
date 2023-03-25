import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const ProInsert = ({ setProducts, products }) => {
  const [form, setForm] = useState({
    code: 5,
    name: "삼성냉장고",
    price: 3200000,
  });

  const { code, name, price } = form;

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onRegister = (e) => {
    e.preventDefault();
    if (window.confirm(`${name} 상품을 등록하시겠습니까?`)) {
      setProducts(products.concat(form));
    }
  };

  return (
    <Card className="my-3">
      <Card.Title className="text-center py-2">
        <h3>상품등록</h3>
      </Card.Title>
      <Card.Body>
        <Form className="text-center" onSubmit={onRegister}>
          <Form.Control
            onChange={onChangeForm}
            value={code}
            name="code"
            className="my-2"
            placeholder="상품코드"
          />
          <Form.Control
            onChange={onChangeForm}
            value={name}
            name="name"
            className="my-2"
            placeholder="상품이름"
          />
          <Form.Control
            onChange={onChangeForm}
            value={price}
            name="price"
            className="my-2"
            placeholder="상품가격"
          />
          <Button type="submit">상품등록</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProInsert;
