const startDatabase = require("./database");

function runStartups() {
  // database
  startDatabase()
    .then((data) => console.log("Connected to DB"))
    .catch((err) => `Error database connection: ${err.message}`);
}

module.exports = runStartups;
