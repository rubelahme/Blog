import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createProvider } from "../../../App";
import "./BookOrder.scss";
const BookOrder = () => {
  const { id } = useParams();
  const [user] = useContext(createProvider);
  const [Add, setAdd] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users/" + id)
      .then((res) => res.json())
      .then((result) => {
        setAdd(result);
      });
  }, [id]);
  const date = new Date().toDateString();
  let value = {
    displayName: user.displayName,
    email: user.email,
    amount: Add.Amount,
    name: Add.name,
    img: Add.img,
    Date: date,
  };

  const OrderBook = (id) => {
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((result) => alert("Order success"));
  };
  return (
    <div className="mb-5 add-7">
      <div className="row">
        <div className="col pt-3">
          <div className="text-center">
            <img className="Add-1" src={Add.img} alt="" />
            <p className="text-left p-3  Add-3">{Add.details}</p>
            <div className="d-flex justify-content-between">
              <div className="pl-5">
                <strong>{Add.title}:</strong>
                <span>{Add.name}</span>
              </div>
              <div>
                <strong>=&gt;</strong>${Add.Amount}
              </div>
              <div>{date}</div>
              <div className="pr-5">
                <button onClick={() => OrderBook(value)} className="add-6">
                  Order Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOrder;
