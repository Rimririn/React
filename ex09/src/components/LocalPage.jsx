import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import axios from "axios";

const LocalPage = () => {
  const [locals, setLocals] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLocal = async () => {
    const url = "https://dapi.kakao.com/v2/local/search/keyword.json";
    const config = {
      headers: { Authorization: "KakaoAK 1516d2c502f56b88f702da4d62d772a5" },
      params: { query: "인하대학교", size: 5, page: 1 },
    };
    setLoading(true);
    const result = await axios.get(url, config);
    setLoading(false);
    console.log(result);
    setLocals(result.data.documents);
  };

  useEffect(() => {
    getLocal();
  }, []);

  if (loading) return <h1 className="text-center my-5">로딩중....</h1>;

  return (
    <Row>
      <Col>
        <h1 className="text-center my-5">지역검색</h1>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <td>장소명</td>
              <td>주소</td>
              <td>전화</td>
            </tr>
          </thead>
          <tbody>
            {locals.map((local) => (
              <tr key={local.id}>
                <td>{local.place_name}</td>
                <td>{local.address_name}</td>
                <td>{local.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default LocalPage;
