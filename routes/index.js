const QuestionsController = require("../controller/QuestionsController");

function AppRoutes(app) {
  app.post("/api/public/q1", QuestionsController.question1);
  app.post("/api/public/q2", QuestionsController.question2);
  app.post("/api/public/q3", QuestionsController.question3);
  app.get("/api/public/q4", QuestionsController.question4);
}

module.exports = AppRoutes;
