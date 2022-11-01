const router = require("express").Router();
const UserModel = require("../models/user");
const ProductModel = require("../models/products");
const ProfileDetails = require("../models/profileDetails");
const { protectRoute } = require("./utils");
const { JWT_SECRET } = require("../secret");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

router.use(protectRoute);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.get("/:id", getUserById);
router.delete("/:id", removeUser);
router.get("/:id/info", getGeneralUserInfo);
router.get("/me/details", getMe);
router.post("/invite", sendInviteLink);
router.post("/:id/info", addUserInfo);
router.get("/:id/info", getUserInfo);

async function removeUser(req, res) {
  try {
    const id = req.params.id;
    await UserModel.findByIdAndDelete(id);
    await ProductModel.deleteMany({ userId: id });
  } catch (err) {
    console.log(err);
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await UserModel.find();

    if (!users) {
      res.send("users not found");
    }

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

 async function getUserById(req, res) {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    if (!user) res.status(404).json({ msg: "user not found" });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

async function getUserInfo(req, res) {
  try {
    let user = await ProfileDetails.findOne({ userId: req.userId }).lean();

    if (!user) {
      res.status(404).json({ msg: "user not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getMe(req, res) {
  let { userId } = req;
  try {
    const user = await UserModel.findById(userId);
    // console.log(req.userId);
    // console.log(userId);
    res.status(200).json(user);
  } catch (err) {
    req.status(500);
  }
}

async function addUserInfo(req, res) {
  try {
    let user = await ProfileDetails.findOne({ userId: req.userId }).lean();

    const newDetailsObj = {
      name: req.body.name,
      email: req.body.email,
      designation: req.body.designation,
      specialty: req.body.specialty,
      interests: req.body.interests,
      phone: req.body.phone,
      organization: req.body.organization,
      userId: req.userId,
    };

    if (!user) {
      user = new ProfileDetails(newDetailsObj);
      await user.save();
    }

    console.log(user);

    // const saved = await newDetailsObj.save();
    // // res.status(200).json(saved);
    res.send(newDetailsObj);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function getGeneralUserInfo(req, res) {
  try {
    const id = req.params.id;
    const data = await ProfileDetails.findOne({ userId: id });
    res.status(200).json(data);
  } catch (err) {
    console.log(errr);
    res.send(err);
  }
}

async function getUser(req, res) {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, confirmPassword, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateUser(req, res) {
  try {
    const updatedUser = await ProfileDetails.findByIdAndUpdate(
      req.params.id,
      {
        //updates everything sent in the body
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function sendInviteLink(req, res) {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: "user with email already exists" });
    }

    const secret = JWT_SECRET + email;
    const token = jwt.sign({ email }, secret, {
      expiresIn: "1440m",
    });
    const link = `http://localhost:3000/signup/${req.userId}/${token}`;
    handleSendInvite(link, email);
    res.status(200).json({
      message: "invitation link sent to the email",
    });
    console.log(link);
  } catch (err) {
    console.log(err);
  }
}

// const user = "xrstudios147";
// const pass = "UguH49F-YBjbnWm";

async function handleSendInvite(link, toAddress) {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "xrstudios147@gmail.com",
      pass: "busrvkxrwvnjqfxo",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  let info = await transporter.sendMail({
    from: "xrstudios147@gmail.com",
    to: toAddress,
    subject: "Invite link to join - xrstudio",
    text: "Use this link: " + link,
  });
  console.log(info);
}

module.exports = router;
