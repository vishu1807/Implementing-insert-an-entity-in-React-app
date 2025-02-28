import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1>Add A new Book</h1>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handelChange}
            value={formData.title}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handelChange}
            value={formData.description}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            id="image"
            name="image"
            onChange={handelChange}
            value={formData.image}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;