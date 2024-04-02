import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./home.css";

const Home = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = () => {
    handleauth();
    if (
      day === "" ||
      month === "" ||
      year === "" ||
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year > new Date().getFullYear()
    ) {
      return false;
    } else {
      calcDate();
    }
  };

  const calcDate = () => {
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

  const res = (id, labelnum, formboxnum, message, errorcolor) => {
    id.textContent = message;
    labelnum.style.color = errorcolor;
    formboxnum.style.borderColor = errorcolor;
  };

  const handleauth = () => {
    const dayErrorMessage = document.getElementById("dayerror");
    const monthErrorMessage = document.getElementById("montherror");
    const yearErrorMessage = document.getElementById("yearerror");
    let label = document.querySelectorAll(".applabel");
    let formBox = document.querySelectorAll(".form-control");

    if (day === "") {
      res(
        dayErrorMessage,
        label[0],
        formBox[0],
        "This field is required",
        "hsl(0, 100%, 67%)"
      );
    } else if (day < 1 || day > 31) {
      res(
        dayErrorMessage,
        label[0],
        formBox[0],
        "Must be a valid day",
        "hsl(0, 100%, 67%)"
      );
    } else {
      res(dayErrorMessage, label[0], formBox[0], "", "hsl(0, 0%, 8%)");
    }

    if (month === "") {
      res(
        monthErrorMessage,
        label[1],
        formBox[1],
        "This field is required",
        "hsl(0, 100%, 67%)"
      );
    } else if (month < 1 || month > 12) {
      res(
        monthErrorMessage,
        label[1],
        formBox[1],
        "Must be a valid month",
        "hsl(0, 100%, 67%)"
      );
    } else {
      res(monthErrorMessage, label[1], formBox[1], "", "hsl(0, 0%, 8%)");
    }

    if (year === "") {
      res(
        yearErrorMessage,
        label[2],
        formBox[2],
        "This field is required",
        "hsl(0, 100%, 67%)"
      );
    } else if (year > new Date().getFullYear()) {
      res(
        yearErrorMessage,
        label[2],
        formBox[2],
        "Must be in the past",
        "hsl(0, 100%, 67%)"
      );
    } else {
      res(yearErrorMessage, label[2], formBox[2], "", "hsl(0, 0%, 8%)");
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
