import React, { useState } from "react";
import apiService from "../services/apiService";
import apiPath from "../config/apiPath";

const SamplePage = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.postCall(apiPath.sampleEndpoint, { input });
      setInput("");
    } catch (error) {
      console.error("Error in sending content:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>News Title</label>
        <input type="text" value={input} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SamplePage;
