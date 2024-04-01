import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./home.css";

const Home = () => {
  const [btncolor, setBtncolor] = useState("hsl(0, 0%, 8%)");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = () => {
    handleauth();

    calcDate();
  };

  const calcDate = () => {
    setBtncolor("hsl(259, 100%, 65%)");
    let realYear = document.getElementById("realyear");
    let realMonth = document.getElementById("realmonth");
    let realDay = document.getElementById("realday");
    let currDay = new Date().getDay();
    let currMonth = new Date().getMonth() + 1;
    let currYear = new Date().getFullYear();
    let calcyear = currYear - year;
    let calcmonth = Math.abs(currMonth - month);
    let calcday = Math.abs(currDay - day);
    realYear.textContent = calcyear;
    realMonth.textContent = calcmonth;
    realDay.textContent = calcday;
  };
  const handleauth = () => {
    const dayErrorMessage = document.getElementById("dayerror");
    const monthErrorMessage = document.getElementById("montherror");
    const yearErrorMessage = document.getElementById("yearerror");
    if (day < 1 || day > 31) {
      dayErrorMessage.textContent = "Please enter a valid date";
    }
    if (month < 1 || month > 12) {
      monthErrorMessage.textContent = "Please enter a valid month";
    }
    if (year < 1582) {
      yearErrorMessage.textContent =
        " Please enter a valid gregorian calendar date";
    }
  };

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
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    pattern="[0-9]"
                    maxLength={2}
                  />
                  <p id="dayerror"></p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="day">
                  <Form.Label className="applabel">Month</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM"
                    className="forminput"
                    value={month}
                    maxLength={2}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  <p id="montherror"></p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="day">
                  <Form.Label className="applabel">Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="YYYY"
                    className="forminput"
                    value={year}
                    maxLength={4}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <p id="yearerror"></p>
                </Form.Group>
              </div>
            </Form>

            <div className="submitline">
              <hr />
              <button
                type="button"
                style={{ backgroundColor: btncolor }}
                className="submitbutton btn btn-primary"
                onClick={handleSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="44"
                  viewBox="0 0 46 44"
                >
                  <g fill="none" stroke="#FFF" strokeWidth="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                  </g>
                </svg>
              </button>
            </div>
            <div>
              <p className="results">
                <span className="rnum" id="realyear">
                  - -
                </span>{" "}
                <span>years</span>
              </p>
              <p className="results">
                <span className="rnum" id="realmonth">
                  - -
                </span>{" "}
                <span>months</span>
              </p>
              <p className="results">
                <span className="rnum" id="realday">
                  - -
                </span>{" "}
                <span>days</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
