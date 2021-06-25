import React from "react";
import { useForm } from "react-hook-form";

const AdminAdd = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const Data = {
      Email: data.email,
    };
    fetch("http://localhost:5000/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Data),
    })
      .then((res) => res.json())
      .then((result) => alert("Order success"));
  };
  return (
    <div className="pt-5">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              placeholder="Admin Email Add"
              {...register("email", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAdd;
