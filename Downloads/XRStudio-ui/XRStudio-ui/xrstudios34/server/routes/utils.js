const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
const { JWT_SECRET } = require("../secret");

module.exports.protectRoute = function protectRoute(req, res, next) {
  try {
    // console.log(req.cookies.userToken, req.signedCookies, "token123")
    // console.log(req.headers["authorization"]);
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.splite(" ")[1];

    // console.log(req.cookies);

    let decryptedToken = jwt.verify(req.cookies.userToken, JWT_SECRET);

    if (decryptedToken) {
      let userId = decryptedToken.id;
      req.userId = userId;

      next();
    } else {
      res.send("login to access this resource");
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({
      message: err,
    });
  }
};

module.exports.isAuthorized = function (roles) {
  return async function (req, res, next) {
    let { userId } = req;

    try {
      let user = await UserModel.findById(userId);

      let userIsAuthorized = roles.includes(user.role);
      if (userIsAuthorized) {
        req.user = user;
        next();
      } else {
        res.status(200).json({
          message: "user not authorized",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Server error",
      });
    }
  };
};
