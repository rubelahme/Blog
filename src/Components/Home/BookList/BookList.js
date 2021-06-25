import React, { useEffect, useState } from "react";
import "./BookList.scss";
import BookItem from "../BookItem/BookItem";

const BookList = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {item.map((pd) => (
            <BookItem key={pd._id} data={pd}></BookItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
