import React, { useEffect, useState } from "react";
import "./BookList.scss";
import BookItem from "../BookItem/BookItem";
import Fade from "react-reveal/Fade";
const BookList = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://rocky-ocean-95778.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);
  return (
    <Fade bottom>
      <div className="container py-5">
        <div className="row">
          {item.map((pd) => (
            <BookItem key={pd._id} data={pd}></BookItem>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default BookList;
