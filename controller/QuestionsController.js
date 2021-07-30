const { sendSuccess, sendError } = require("../Common/util");
const UserDau = require("../dau/UserDau");
const { foo, saveDataInFile, reverseWithoutSpecial } = require("../services");
const { parse } = require("json2csv");

// question 1
exports.question1 = (req, res, next) => {
  const n = req.body.number;
  if (!n) throw new Error("Enter number!");
  if (isNaN(n)) throw new Error("Invalid number!");
  var result = foo(n);
  return sendSuccess(res, { answer: result });
};

// question 2
exports.question2 = (req, res, next) => {
  const files = req.files;
  if (!files.file) return sendError(res, { msg: "No file selected" });
  else {
    const file = files.file;
    saveDataInFile(file)
      .then((data) => sendSuccess(res, { msg: data }))
      .catch(next);
  }
};

// question 3
exports.question3 = (req, res) => {
  const text = req.body.text;
  if (!text) throw new Error("Enter text!");
  var result = reverseWithoutSpecial(text);
  return sendSuccess(res, { answer: result });
};

// question 4
exports.question4 = (req, res, next) => {
  UserDau.FetchAll()
    .then((userData) => {
      const fields = ["_id", "name", "phone", "email", "website"];
      const opts = { fields };
      const csv = parse(userData, opts);
      console.log(csv);
      res.setHeader("Content-disposition", "attachment; filename=Users.csv");
      res.set("Content-Type", "text/csv");
      return res.status(200).send(csv);
    })
    .catch(next);
};
