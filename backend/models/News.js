const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: [true, "Headline is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  imageURL: {
    type: String,
    required: [true, "Image URL is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("News", newsSchema);


/**
 * News Model (newsSchema)
 * 
 * This Mongoose schema defines the structure for the "News" collection in MongoDB.
 * It includes validation rules and default values for each news article document.
 *
 * Fields:
 * - headline     : String (required) – The title or headline of the news article
 * - description  : String (required) – The detailed content of the news
 * - imageURL     : String (required) – The URL for the news image
 * - category     : String (required) – The category or type of the news (e.g., Sports, Politics)
 * - createdAt    : Date (default: now) – Automatically stores the creation timestamp
 *
 * This model is used to perform CRUD operations on news articles in the database.
 */
