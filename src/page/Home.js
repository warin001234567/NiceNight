import React, { useState } from "react";
import NavbarUI from "../component/Navbar";
import {
  Form,
  Row,
  Col,
  Container,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Button,
  Toast,
} from "react-bootstrap";
import Moment from "moment";
import "../static/style/home.css";

const hoursData = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const minData = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];
const Home = (props) => {
  const time = Moment();
  const [hours, setHours] = useState(time.format("hh"));
  const [minute, setMinute] = useState(time.format("mm"));
  const [amPm, setAmPm] = useState(time.format("A"));
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const [showTime, setShowTime] = useState([]);
  const [mode, setMode] = useState(true);

  const cultime = () => {
    const timeSet = hours + ":" + minute + " " + amPm;
    const newtime = Moment(timeSet, "hh:mm A");
    setShowTime([
      newtime.add({ hour: 4, minute: 30 }).format("hh:mm A"),
      newtime.add({ hour: 1, minute: 30 }).format("hh:mm A"),
      newtime.add({ hour: 1, minute: 30 }).format("hh:mm A"),
      newtime.add({ hour: 1, minute: 30 }).format("hh:mm A"),
      "Time to wake up",
    ]);
    console.log(showTime);
    // return;
  };
  const subtracttime = () => {
    const timeSet = hours + ":" + minute + " " + amPm;
    console.log(timeSet);
    const newtime = Moment(timeSet, "hh:mm A");
    setShowTime([
      newtime.subtract({ hour: 4, minute: 30 }).format("hh:mm A"),
      newtime.subtract({ hour: 1, minute: 30 }).format("hh:mm A"),
      newtime.subtract({ hour: 1, minute: 30 }).format("hh:mm A"),
      newtime.subtract({ hour: 1, minute: 30 }).format("hh:mm A"),
      "Time to sleep",
    ]);
    console.log(showTime);
    // return;
  };
  const handleSave = (value) => {
    const timeSet = hours + ":" + minute + " " + amPm;
    const newtime = Moment(timeSet, "hh:mm A").format("hh:mm A");
    var historyData = [];
    console.log(newtime);
    try {
      historyData = JSON.parse(localStorage.getItem("history"));
      console.log("2");
      console.log("HistoryData:", historyData);
    } catch (error) {
      console.log(error);
      historyData = [];
    }
    if (historyData == null) {
      historyData = [];
    }
    if (mode) {
      var history = {
        sleepTime: newtime,
        wakeupTime: showTime[value],
        date: Moment().format("DD/MM/YYYY"),
      };
    } else {
      var history = {
        wakeupTime: newtime,
        sleepTime: showTime[value],
        date: Moment().format("DD/MM/YYYY"),
      };
    }
    historyData.push(history);
    localStorage.setItem("history", JSON.stringify(historyData));
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#394046",
      }}
    >
      <NavbarUI value="1" />
      <Container>
        <Col xs={12}>
          <Toast
            show={showA}
            onClose={toggleShowA}
            style={{ position: "absolute", zIndex: 10 }}
          >
            <Toast.Header>
              <strong className="mr-auto">{showTime[4]}</strong>
            </Toast.Header>
            <Toast.Body style={{ textAlign: "center" }}>
              <Row
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  block
                  onClick={(e) => {
                    handleSave(3);
                    toggleShowA();
                  }}
                >
                  {showTime[3]}
                </Button>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  block
                  onClick={(e) => {
                    handleSave(2);
                    toggleShowA();
                  }}
                >
                  {showTime[2]}
                </Button>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  block
                  onClick={(e) => {
                    handleSave(1);
                    toggleShowA();
                  }}
                >
                  {showTime[1]}
                </Button>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  block
                  onClick={(e) => {
                    handleSave(0);
                    toggleShowA();
                  }}
                >
                  {showTime[0]}
                </Button>
              </Row>
            </Toast.Body>
          </Toast>
        </Col>
        <Row>
          <Col style={{ textAlign: "center", marginTop: 50 }}>
            {/* <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2" style={{ color: "white" }}>
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group> */}
            <h4 style={{ color: "white" }}>เลือกเวลา</h4>
            <DropdownButton
              as={ButtonGroup}
              variant="secondary"
              title={hours}
              style={{ marginRight: 20 }}
            >
              <div style={{ maxHeight: "20vh", overflowY: "scroll" }}>
                {hoursData.map((item) => {
                  return (
                    <Dropdown.Item
                      eventKey={item}
                      onSelect={(e) => setHours(e)}
                    >
                      {item}
                    </Dropdown.Item>
                  );
                })}
              </div>
            </DropdownButton>
            <DropdownButton
              as={ButtonGroup}
              variant="secondary"
              title={minute}
              style={{ marginRight: 20 }}
            >
              <div style={{ maxHeight: "20vh", overflowY: "scroll" }}>
                {minData.map((item) => {
                  return (
                    <Dropdown.Item
                      eventKey={item}
                      onSelect={(e) => setMinute(e)}
                    >
                      {item}
                    </Dropdown.Item>
                  );
                })}
              </div>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} variant="secondary" title={amPm}>
              <Dropdown.Item eventKey="AM" onSelect={(e) => setAmPm(e)}>
                AM
              </Dropdown.Item>
              <Dropdown.Item eventKey="PM" onSelect={(e) => setAmPm(e)}>
                PM
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row style={{ marginTop: 50, paddingLeft: 30, paddingRight: 30 }}>
          <Button
            variant="secondary"
            size="lg"
            block
            onClick={() => {
              cultime();
              setMode(true);
              toggleShowA();
            }}
          >
            Submit time to sleep
          </Button>
        </Row>
        <Row style={{ marginTop: 20, paddingLeft: 30, paddingRight: 30 }}>
          <Button
            variant="secondary"
            size="lg"
            block
            onClick={() => {
              subtracttime();
              setMode(false);
              toggleShowA();
            }}
          >
            Submit time to wakeup
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
