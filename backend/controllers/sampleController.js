const Sample = require("../models/sampleModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createSample = catchAsync(async (req, res, next) => {
  const newsTitle = req.body.input;

  if (!newsTitle) {
    return next(new AppError("News title is required", 400));
  }

  const sample = await Sample.create({ newsTitle });

  res.status(201).json({
    status: "success",
    data: {
      sample,
    },
  });
});
