const express = require("express");
const sampleController = require("../controllers/sampleController");

const router = express.Router();

router.post("/msnews", sampleController.createSample);

/* 
 later you can chain this with get method, put, patch, delete etc. like this how the express router works(chianing middlewares)
  router.post("/msnnews", sampleController.createSample).get("/msnnews", sampleController.getSample);
*/

module.exports = router;
