const mongoose = require("mongoose");
const { sendError } = require("../Common/util");

exports.HandleError = (err, req, res, next) => {
  console.error(`Error Handler: ${err.message}`);
  if (err instanceof mongoose.Error) sendError(res, err, 422);
  else sendError(res, { msg: err.message }, 400);
};
