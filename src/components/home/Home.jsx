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
                  <Form.Label className="applabel">Day</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="DD"
                    className="forminput"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="day">
                  <Form.Label className="applabel">Month</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM"
                    className="forminput"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="day">
                  <Form.Label className="applabel">Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="YYYY"
                    className="forminput"
                  />
                </Form.Group>
              </div>
            </Form>
            <div className="submitline">
              <hr />
              <button type="button" class="submitbutton btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="44"
                  viewBox="0 0 46 44"
                >
                  <g fill="none" stroke="#FFF" stroke-width="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                  </g>
                </svg>
              </button>
            </div>
            <div>
              <p className="results">
                <span className="rnum">- -</span> <span>Years</span>
              </p>
              <p className="results">
                <span className="rnum">- -</span> <span>Months</span>
              </p>
              <p className="results">
                <span className="rnum">- -</span> <span>Days</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
