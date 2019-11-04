const teamTreesObject = require("../controllers/controller.js");
const bodyParser = require("body-parser");

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.route("/teamtrees").get(teamTreesObject);
  app.route("/").get(teamTreesObject);
};
