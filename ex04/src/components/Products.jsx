import React, { useState } from 'react'
import { Row, Col, Table } from 'react-bootstrap'


const Products = () => {
    const [products, setProducts] = useState([
        { code: 1, name: 'LG 냉장고', price: 2500000 },
        { code: 2, name: 'LG TV', price: 3000000 },
        { code: 3, name: 'LG 세탁기', price: 2400000 },
    ]); // JSON Data
    return (
        <div>
            <h1>상품관리</h1>
            <Row className='justify-content-center my-5'>
                <Col md={10}>
                    <Table striped bordered hover className='px-2'>
                        <thead>
                            <tr>
                                <td>상품코드</td>
                                <td>상품이름</td>
                                <td>상품가격</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(p=>
                                <tr>
                                    <td>{p.code}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Products 