import React, { useEffect, useState } from "react";
import { Col, Row, Tab } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.scss";
import AddBook from "../AddBook/AddBook";
import { useContext } from "react";
import { createProvider } from "../../../App";
import AllOrderList from "../AllOrderList/AllOrderList";
import DelateBook from "../DelateBook/DelateBook";
import UserOrder from "../UserOrder/UserOrder";
import AdminAdd from "../AdminAdd/AdminAdd";

const Dashboard = () => {
  const [user] = useContext(createProvider);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://rocky-ocean-95778.herokuapp.com/admin?email" + user.email)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [user.email]);
  console.log(item);

  return (
    <div>
      <div className="d-flex justify-content-between list-7">
        <div>
          <h2 className="px-4 py-3">World Book</h2>
        </div>
        <div className="px-4 py-3 list-6">
          <h4>
            {user.displayName}
            <FontAwesomeIcon className=" ml-1" icon={faSignInAlt} />
          </h4>
        </div>
      </div>
      <Tab.Container>
        <Row className="list-5">
          <Col sm={3} className="list-1 p-0 ">
            <ListGroup className="list-2">
              {item.Email === user.email ? (
                <ListGroup.Item href="#link1" className="list-3 pl-5">
                  Add Book
                </ListGroup.Item>
              ) : (
                <div></div>
              )}
              {item.Email === user.email ? (
                <ListGroup.Item href="#link2" className="list-3 pl-5">
                  Admin Order List
                </ListGroup.Item>
              ) : (
                <div></div>
              )}
              {item.Email === user.email ? (
                <ListGroup.Item href="#link3" className="list-3 pl-5">
                  Admin Delete BooK
                </ListGroup.Item>
              ) : (
                <div></div>
              )}

              <ListGroup.Item href="#link4" className="list-3 pl-5">
                Order List
              </ListGroup.Item>
              {item.Email === user.email ? (
                <ListGroup.Item href="#link5" className="list-3 pl-5">
                  Add Admin
                </ListGroup.Item>
              ) : (
                <div></div>
              )}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <AddBook></AddBook>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <AllOrderList></AllOrderList>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <DelateBook></DelateBook>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <UserOrder></UserOrder>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <AdminAdd></AdminAdd>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Dashboard;
