import React from "react";
import { useHistory } from "react-router-dom";
import "./BookItem.scss";
const BookItem = (props) => {
  const { title, img, Amount, _id } = props.data;
  const history = useHistory();
  const handleClick = (id) => {
    history.push("/details/" + id);
  };

  return (
    <div className="col-md-4 p-1">
      <div className="p-1 book-1">
        <div className="text-center">
          <img src={img} alt="" className="img-1" />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p className="pt-2 Author">
              <strong> Author's Name:</strong> <small>{title}</small>
            </p>
          </div>
          <div>
            <p className="pt-2">
              {" "}
              <strong>${Amount}</strong>{" "}
            </p>
          </div>
          <div>
            <button onClick={() => handleClick(_id)} className="book-4">
              Book Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
