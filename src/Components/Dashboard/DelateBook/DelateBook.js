import React, { useEffect, useState } from "react";
import "./DelateBook.scss";

const DelateBook = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handelDelete = (id) => {
    fetch("http://localhost:5000/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="container Delete-2">
      <h1 className="text-center p-1">All Order List</h1>
      <div className="row">
        <div className="col">
          <table class="table table-hover table-dark">
            <thead>
              <tr className="bg-primary">
                <th scope="col">#</th>
                <th scope="col">Author Name</th>
                <th scope="col">Book Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {item.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.title}</td>
                  <td>{data.Amount}</td>
                  <td>
                    <button
                      onClick={() => handelDelete(data._id)}
                      className="Delete-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DelateBook;
