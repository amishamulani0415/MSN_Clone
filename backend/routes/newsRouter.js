const express = require("express");
const sampleController = require("../controllers/sampleController");
const newsController = require("../controllers/newsController");

const router = express.Router();

router.post("/msnews", sampleController.createSample);

/* 
 later you can chain this with get method, put, patch, delete etc. like this how the express router works(chianing middlewares)
  router.post("/msnnews", sampleController.createSample).get("/msnnews", sampleController.getSample);
*/

// Route to handle POST request for adding a news article
// You can chain more HTTP methods like .get(), .put(), .delete() here after this execution

router
  .route("/msnews")
  .post(newsController.createSample); // Add News



module.exports = router;
