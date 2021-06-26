import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddBook.scss";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imgs, setImage] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    let eventData = {
      name: data.name,
      details: data.details,
      Amount: data.Amount,
      title: data.title,
      img: imgs,
    };
    fetch("https://rocky-ocean-95778.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const handleImg = (e) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Add-1">
      <h1 className="pb-3 Add-2">Add Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="" className="fonts">
          Book Name
        </label>
        <input className="form-control" type="text" {...register("name")} />
        <label htmlFor="" className="fonts">
          Author's Name
        </label>
        <input
          className="form-control"
          type="text"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <label htmlFor="" className="fonts">
          Book Description
        </label>
        <input
          className="form-control Description"
          type="text"
          {...register("details", { required: true })}
        />
        {errors.details && <span>This field is required</span>}

        <label htmlFor="" className="fonts">
          Book Amount
        </label>
        <input
          className="form-control"
          type="number"
          {...register("Amount", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <label htmlFor="" className="fonts">
          Book image
        </label>
        <br />
        <input type="file" {...register("file")} onChange={handleImg} />
        <br />
        <br />
        <input className="w-25 Add" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddBook;
