import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import NavbarUI from "../component/Navbar";

const History = () => {
  const [historyTime, setHistoryTime] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      var historyData = JSON.parse(localStorage.getItem("history"));
      console.log("2");
      console.log("HistoryData:", historyData);
    } catch (error) {
      console.log(error);
      var historyData = [];
    }
    setHistoryTime(historyData);
    setLoading(true);
  }, []);
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "#394046",
        }}
      >
        <NavbarUI value="2" />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Sleep Time</th>
              <th>Wake up Time</th>
            </tr>
          </thead>
          <tbody>
            {historyTime.map((item, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{item.date}</td>
                  <td>{item.sleepTime}</td>
                  <td>{item.wakeupTime}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  } else return <></>;
};

export default History;
