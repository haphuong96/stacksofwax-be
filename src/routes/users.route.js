const userController = require("../controllers/user.controller");

const userRouters = [
  { path: "/signup", params: [userController.registerUser] },
  { path: "/login", params: [userController.login] },
];

module.exports = { userRouters };
