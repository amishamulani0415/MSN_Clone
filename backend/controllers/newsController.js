// Import the News model
const News = require("../models/News");

// Controller to create a news article
exports.createSample = async (req, res, next) => {
  try {
    // Extract data from request body
    const { headline, description, imageURL, category } = req.body;

    // Create a new News document in MongoDB
    const news = await News.create({
      headline,
      description,
      imageURL,
      category,
    });

    // Send success response
    res.status(201).json({
      status: "success",
      data: news,
    });
  } catch (err) {
    // Pass error to global error handler
    next(err);
  }
};



/**
 * newsController.js
 * 
 * This controller handles the creation of news articles in the database.
 * It imports the Mongoose `News` model and provides an asynchronous function `createSample`
 * which receives the request body from the client, extracts the headline, description,
 * imageURL, and category, and stores the data into MongoDB.
 *
 * On success:
 *    - Responds with status 201 (Created)
 *    - Returns a success message and the created news data in JSON format
 * On failure:
 *    - Passes any error to the next middleware (for centralized error handling)
 *
 * Usage:
 *    This controller function is mapped to the POST /api/msnews route in the router.
 *
 * Example Request Body:
 * {
 *   "headline": "Breaking News",
 *   "description": "Some important details...",
 *   "imageURL": "https://image.com/news.jpg",
 *   "category": "World"
 * }
 */
