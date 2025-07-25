import React, { useState } from "react";
import axios from "axios";
import config from "../config"; // adjust path as needed

const API = config.API_ENDPOINT;

const NewsForm = () => {
  const [formData, setFormData] = useState({
    headline: "",
    description: "",
    imageURL: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}msnews`, formData);
      alert("News added successfully!");
      setFormData({
        headline: "",
        description: "",
        imageURL: "",
        category: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add news.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5 p-4 bg-white border rounded shadow">
      <div className="mb-3">
        <input
          name="headline"
          value={formData.headline}
          onChange={handleChange}
          placeholder="Headline"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <input
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
          placeholder="Image URL"
          className="form-control"
          required
        />
      </div>
      {formData.imageURL && (
        <div className="mb-3">
          <img
            src={formData.imageURL}
            alt="preview"
            className="img-fluid rounded"
            style={{ height: "150px", objectFit: "cover", width: "100%" }}
          />
        </div>
      )}
      <div className="mb-3">
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        ➕ Add News
      </button>
    </form>
  );
};

export default NewsForm;
