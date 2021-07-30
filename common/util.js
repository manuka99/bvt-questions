const sendSuccess = (res, data) => {
  res.status(200).json({ success: true, data });
};

const sendError = (res, data, errorCode = 400) => {
  res.status(errorCode).json({ success: false, data });
};

function readFile(fileURI) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileURI, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = {
  sendSuccess,
  sendError,
  readFile,
};
