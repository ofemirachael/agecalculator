import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="acard">
            <Form>
              <div className="formarea">
                <Form.Group className="mb-3" controlId="day">
                  <Form.Label>Day</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="DD"
                    className="forminput"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="day">
                  <Form.Label>Month</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM"
                    className="forminput"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="day">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="YYYY"
                    className="forminput"
                  />
                </Form.Group>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
