# 인하대학교 VR/AR

인하대 VR/AR 리엑트 4주차 강의

## 강의 요약

react-bootstrap 사용
useState 사용
데이터 추가 삭제

### `react-bootstrap`

    yarn add react-bootstrap bootstrap


    import "bootstrap/dist/css/bootstrap.min.css";

- 설치 후 index.js에 import
- [https://react-bootstrap.netlify.app/getting-started/introduction](https://react-bootstrap.netlify.app/getting-started/introduction)

### 삭제

    setStudents(students.filter((s) => s.no !== student.no));

- filter 함수로 state 삭제

### 등록

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

- form 입력 받아서 concat으로 추가
