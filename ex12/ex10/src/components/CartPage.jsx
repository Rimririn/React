import React from "react";
import { useState } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../firebaseInit";
import moment from "moment";

const CartPage = () => {
  const db = getDatabase(app);

  const uid = sessionStorage.getItem("uid");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBooks = () => {
    setLoading(true);
    onValue(ref(db, `books/${uid}`), (snapshot) => {
      let rows = [];
      snapshot.forEach((row) => {
        rows.push({ key: row.key, ...row.val() });
      });
      console.log(rows);
      setLocals(rows);
      setLoading(false);
    });
  };
  const onRemove = (id) => {
    if (window.confirm(id + "번 즐겨찾기를 삭제하실래요?")) {
      remove(ref(db, `favorite/${uid}/${id}`));
      alert("즐겨찾기 삭제 완료!");
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (loading) return <h1>로딩중...</h1>;
  return (
    <Row className="my-5">
      <Col>
        <h1 className="text-center">장바구니</h1>

        <Table>
          <thead>
            <tr>
              <td>장소명</td>
              <td>주소</td>
              <td>전화</td>
              <td>시간</td>
              <td>위치</td>
              <td>삭제</td>
            </tr>
          </thead>
          <tbody>
            {locals.map((local) => (
              <tr key={local.key}>
                <td>{local.place_name}</td>
                <td>{local.address_name}</td>
                <td>{local.phone}</td>
                <td>{local.date}</td>
                <td>
                  <MapPage local={local} />
                </td>
                <td>
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={() => onRemove(local.id)}
                  >
                    삭제
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default CartPage;
