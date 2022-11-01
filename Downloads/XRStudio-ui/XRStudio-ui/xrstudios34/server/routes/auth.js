const router = require("express").Router();
const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { protectRoute } = require("./utils");
const { JWT_SECRET } = require("../secret");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signout);
router.post("/reset-passowrd/:id/:token", resetPassword);

async function signUp(req, res) {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      res.status(401).json({
        message: "passwords and confirm password dont match",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new UserModel({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPass,
      confirmPassword: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
}

async function signIn(req, res) {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      res.status(400).json("Invalid email or password"); //if email not found
    }

    const validatePass = await bcrypt.compare(req.body.password, user.password);
    if (!validatePass) {
      res.status(400).json("Invalid email or password"); //if email not found
    }

    let token = jwt.sign({ id: user["_id"] }, JWT_SECRET, { expiresIn: "4h" });
    res.cookie("userToken", token);

    console.log(req.cookies);
    res.status(200).json({
      token,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
}

async function signout(req, res) {
  try {
    res.clearCookie("userToken");
    res.send({ msg: "Logged out" });
  } catch (err) {
    res.status(500).json({
      message: "error logging out",
    });
  }
}

async function forgotPassword(req, res) {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) res.status(404).json({ message: "email not found" });

    const secret = JWT_SECRET + user.password;
    const payload = { email: user.email, id: user.id };
    const token = jwt.sign(payload, secret, { expiresIn: "5m" });
    const link = `http://localhost:5000/auth/reset-password/${user["_id"]}/${token}`;
    console.log(link);
    //send email using nodemailer
    res.status(200).json({
      message: "password reset link has been sent to your registered email",
      link,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
}

async function resetPassword(req, res) {
  try {
    const { id, token } = req.params;
    const { password, confirmPassword } = req.body;
    const user = await UserModel.findById(id);

    if (id != user["_id"]) {
      res.status(400).json({ message: "Invalid id" });
    }

    const secret = JWT_SECRET + user.password;
    const payload = jwt.verify(token, secret);
    if (password !== confirmPassword) {
      res.status(401).json({ message: "passwords dont match" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const hashedConfirmPass = await bcrypt.hash(confirmPassword, salt);

    user.password = hashedPass;
    user.confirmPassword = hashedConfirmPass;

    await user.save();
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: "Invalid token" });
  }
}

module.exports = router;
