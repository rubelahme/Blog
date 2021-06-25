import React, { useContext, useEffect, useState } from "react";
import { createProvider } from "../../../App";

const UserOrder = () => {
  const [item, setItem] = useState([]);
  const [user] = useContext(createProvider);
  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
      });
  }, [user.email]);
  return (
    <div className="container">
      <h1 className="text-center p-1">All Order List</h1>
      <div className="row">
        <div className="col">
          <table class="table table-hover table-dark">
            <thead>
              <tr className="bg-primary">
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Author Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {item.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.displayName}</td>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
                  <td>{data.amount}</td>
                  <td>{data.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
