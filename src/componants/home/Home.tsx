import React from "react";
import {Col, Container, Row} from "react-bootstrap";

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col className='text-center'>
                    <h1>Welcome to Harry's Demo website.</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Home