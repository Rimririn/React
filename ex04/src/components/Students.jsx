import React, { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";

const Students = () => {
  const [students, setStudents] = useState([
    {
      no: 1,
      name: "홍길동",
      dept: "컴정과",
    },
    {
      no: 2,
      name: "심청이",
      dept: "전자과",
    },
    {
      no: 3,
      name: "강감찬",
      dept: "전기과",
    },
  ]);
  return (
    <div>
      <h1>학생관리</h1>
      <Row className="justify-content-center my-5">
        <Col md={8} className="px-5">
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <td>학번</td>
                <td>이름</td>
                <td>학과</td>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr>
                  <td>{s.no}</td>
                  <td>{s.name}</td>
                  <td>{s.dept}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Students;
