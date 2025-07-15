import React, { useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_ENDPOINT;

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
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow space-y-4"
    >
      <input
        name="headline"
        value={formData.headline}
        onChange={handleChange}
        placeholder="Headline"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="imageURL"
        value={formData.imageURL}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full p-2 border rounded"
        required
      />
      {formData.imageURL && (
        <img
          src={formData.imageURL}
          alt="preview"
          className="h-32 w-full object-cover rounded"
        />
      )}
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        ➕ Add News
      </button>
    </form>
  );
};

export default NewsForm;



/**
 * NewsForm Component
 * 
 * A React form component to submit news articles to the backend.
 * 
 * Features:
 * - Handles user input for headline, description, image URL, and category
 * - Shows a live image preview if image URL is provided
 * - Sends a POST request to the API to save the news
 * - Resets the form after successful submission
 */
