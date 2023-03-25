import React, { useState } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import StuInsert from "./StuInsert";

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

  const onDelete = (student) => {
    if (window.confirm(`${student.name} 학생을 삭제하시겠습니까?`)) {
      // const newStudents = student.filter((s) => s.no !== student.no);

      // setStudents(newStudents);

      setStudents(students.filter((s) => s.no !== student.no));
    }
  };

  return (
    <div>
      <h1>학생관리</h1>
      <Row className="justify-content-center my-5">
        <Col md={8} className="px-5">
          <StuInsert setStudents={setStudents} students={students} />
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <td>학번</td>
                <td>이름</td>
                <td>학과</td>
                <td>삭제</td>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.no}>
                  <td>{s.no}</td>
                  <td>{s.name}</td>
                  <td>{s.dept}</td>
                  <td>
                    <Button variant="danger" onClick={() => onDelete(s)}>
                      삭제
                    </Button>
                  </td>
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
