const app = require("./app");
const { PORT } = require("./config");
const startDatabase = require("./startups/database");

async function startApp() {
  try {
    await startDatabase();
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
  } catch (err) {
    console.error(`Error database connection: ${err.message}`);
    startApp();
  }
}

startApp();
