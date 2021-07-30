const { connect } = require("mongoose");
const { DB } = require("../config");

const startDatabase = () => {
  return new Promise((resolve, reject) => {
    connect(DB, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

module.exports = startDatabase;
