import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Counter from "./counter";
import BankHolidays from "./bank-holidays";

function Home() {
    return (
        <Container fluid className='m-2'>
            <Row>
                <Col className='text-center'>
                    <h1>Welcome to Harry's Demo website.</h1>
                </Col>
            </Row>
            <Row>
                <Counter/>
            </Row>
            <Row>
                <BankHolidays/>
            </Row>
        </Container>
    )
}

export default Home