const router = require("express").Router();
const UserModel = require("../models/user");
const UseCaseModel = require("../models/usecase");
const ProfileDetails = require("../models/profileDetails");
const jwt = require("jsonwebtoken");
const { protectRoute } = require("./utils");
const multer = require("multer");
const fs = require("fs");
const admZip = require("adm-zip");
const { dirname } = require("path");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.use(protectRoute);
router.get("/", getAllCases);
router.get("/all", getAllCasesById);
router.get("/all/collaborator", getCollaborator);
router.get("/all/medical", getMedical);
router.get("/all/arservices", getAR);
router.get("/all/mr", getMR);
router.get("/all/customcall", getCustomCall);
router.get("/all/others", getOthers);
router.get("/all/VirtualReality", getVirtualReality)
router.get("/single/:id", getCaseById);
router.get("/single/:id/download", downloadZip);
router.post("/create-use-case", upload.array("case-images", 6), createCase);
router.delete("/:id", deleteCase)


async function getAllCasesById(req, res) {
  try {
    const cases = await UseCaseModel.find({ userId: req.userId });

    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function deleteCase(req, res) {
  try {
    const cases = await UseCaseModel.findByIdAndDelete(req.params.id);
    res.status(200).json({msg: "case deleted"})
  } catch(err) {
    console.log(err)
    res.send(err)
  }
}

async function getCollaborator(req, res) {
  try {
    const cases = await UseCaseModel.find({ category: "Collaborator" });
    // let ans = await getUserById(caseFound.userId);
    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getMedical(req, res) {
  try {
    const cases = await UseCaseModel.find({ category: "Medical" });
    // let ans = await getUserById(caseFound.userId);
    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getAR(req, res) {
  try {
    const cases = await UseCaseModel.find({ category: "AR services(Marketing tool/ Medical Guides)" });
    // let ans = await getUserById(caseFound.userId);
    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}


async function getMR(req, res) {
  try {
    const cases = await UseCaseModel.find({ category: "MR (Education/Medical)" });
    // let ans = await getUserById(caseFound.userId);
    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getCustomCall(req, res) {
  try {
    const cases = await UseCaseModel.find({ category: "Custom call" });
    // let ans = await getUserById(caseFound.userId);
    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getOthers(req, res) {
  try {
    const cases = await UseCaseModel.find({ category: "Others(Generic Industries)" });
    // let ans = await getUserById(caseFound.userId);
    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}


async function getVirtualReality(req, res) {
  try {
    const cases = await UseCaseModel.find({ category: "Virtual Reality (Simulators/ Marketing & Branding tool)" });
    // let ans = await getUserById(caseFound.userId);
    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function downloadZip(req, res) {
  try {
    const id = req.params.id;
    // console.log(id);
    const caseFound = await UseCaseModel.findById(id);
    // console.log(caseFound.caseImage1);

    for (let i = 0; i < caseFound.uploadedFiles.length; i++) {
      fs.writeFileSync(
        __dirname + "/uploads/" + caseFound.uploadedFiles[i].fileName,
        caseFound.uploadedFiles[i].fileType,
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("The file was saved!");
          }
        }
      );
    }

    let zip = new admZip();
    for (let i = 0; i < caseFound.uploadedFiles.length; i++) {
      zip.addLocalFile(
        __dirname + "/uploads/" + caseFound.uploadedFiles[i].fileName
      );
    }

    // zip.addLocalFile(`${__dirname}/uploads/user-lock.png`);
    var zipFileContents = zip.toBuffer();
    // const fileName = Date.now() + "uploads.zip";
    // const fileType = "application/zip";

    res.send(zipFileContents);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getCaseById(req, res) {
  try {
    const id = req.params.id;

    const caseFound = await UseCaseModel.findById(id);

    let ans = await getUserById(caseFound.userId);
    console.log(ans);

    res.status(200).json({
      title: caseFound.caseTitle,
      requirements: caseFound.caseRequirements,
      category: caseFound.category,
      userName: ans.userName,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}
async function getUserById(id) {
  try {
    const user = await UserModel.findById(id);
    // if (!user) res.status(404).json({ msg: "user not found" });
    return user;
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getAllCases(req, res) {
  try {
    const cases = await UseCaseModel.find();

    if (cases) {
      res.status(200).json(cases);
    } else {
      res.status(200).json({
        msg: "no case found",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function createCase(req, res) {
  try {
    const files = req.files;
    // console.log(files);
    if (!files) {
      res.status(400).send("please upload files");
    }
    let newFileArr = [];

    let fileArray = files.map((file) => {
      let bufferData = fs.readFileSync(file.path, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
        }
      });
      let obj = {
        fileName: Date.now() + file.originalname,
        fileType: bufferData,
      };
      newFileArr.push(obj);

      // console.log(newFileArr);
      // console.log(img);

      // return (encode_image = img.toString("base64"));
    });

    // console.log(fileArray);
    // console.log("newfileArr ", newFileArr);
    let ans = await getUserById(req.userId);

    const newCase = new UseCaseModel({
      userId: req.userId,
      caseTitle: req.body.caseTitle,
      caseRequirements: req.body.caseRequirements,
      category: req.body.category,
      uploadedFiles: newFileArr,
      userName: ans.userName,
    });

    const createCase = await newCase.save();
    res.status(200).send(createCase);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

module.exports = router;
