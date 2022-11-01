const router = require("express").Router();
const express = require("express")
const UserModel = require("../models/user");
const ProductModel = require("../models/products");
const ProfileDetails = require("../models/profileDetails");
const jwt = require("jsonwebtoken");
const { protectRoute } = require("./utils");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const https = require("https");
const qs = require("querystring");
const checksum_lib = require("./Paytm/checksum");
const parseUrl = express.urlencoded({extended: false})
const parseJson = express.urlencoded({extended: false})
/*
 * import checksum generation utility
 * You can get this utility from https://developer.paytm.com/docs/checksum/
 */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/3", get3Models);

router.use(protectRoute);
router.get("/", getAllProducts);
// router.get("/pay", pay);
// router.post("/paynow", payNow)
// router.post("/callback", callback)
router.delete("/:id", deleteProduct);
router.get("/single/:id", getProductById);
router.post(
  "/create-product",
  upload.fields([
    { name: "product-images", maxCount: 4 },
    { name: "cover-image", maxCount: 1 },
  ]),
  createProduct
);

router.post('/paynow', [parseUrl, parseJson], (req, res) => {
  if (!req.body.amount || !req.body.email || !req.body.phone) {
    res.status(400).send('Payment failed')
  } else {
    var params = {};
    params['MID'] = "MACHEN27230008377876";
    params['WEBSITE'] = "DEFAULT";
    params['CHANNEL_ID'] = 'WEB';
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = 'TEST_' + new Date().getTime();
    params['CUST_ID'] = 'customer_001';
    params['TXN_AMOUNT'] = req.body.amount.toString();
    params['CALLBACK_URL'] = 'http://localhost:3000/callback';
    params['EMAIL'] = req.body.email;
    params['MOBILE_NO'] = req.body.phone.toString();


    checksum_lib.genchecksum(params, "Z%3jQs5mgm9T5Uhm", function (err, checksum) {
      var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for staging
      // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

      var form_fields = "";
      for (var x in params) {
        form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
      }
      form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
      res.end();
    });
  }
})



router.post('/callback', (req, res) => {
  var body = '';

  req.on('data', function (data) {
    body += data;
  });

  req.on('end', function () {
    var html = "";
    var post_data = qs.parse(body);

    // received params in callback
    console.log('Callback Response: ', post_data, "\n");


    // verify the checksum
    var checksumhash = post_data.CHECKSUMHASH;
    // delete post_data.CHECKSUMHASH;
    var result = checksum_lib.verifychecksum(post_data, "Z%3jQs5mgm9T5Uhm", checksumhash);
    console.log("Checksum Result => ", result, "\n");


    // Send Server-to-Server request to verify Order Status
    var params = { "MID": config.PaytmConfig.mid, "ORDERID": post_data.ORDERID };

    checksum_lib.genchecksum(params, "Z%3jQs5mgm9T5Uhm", function (err, checksum) {

      params.CHECKSUMHASH = checksum;
      post_data = 'JsonData=' + JSON.stringify(params);

      var options = {
        hostname: 'securegw-stage.paytm.in', // for staging
        // hostname: 'securegw.paytm.in', // for production
        port: 443,
        path: '/merchant-status/getTxnStatus',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
        }
      };


      // Set up the request
      var response = "";
      var post_req = https.request(options, function (post_res) {
        post_res.on('data', function (chunk) {
          response += chunk;
        });

        post_res.on('end', function () {
          console.log('S2S Response: ', response, "\n");

          var _result = JSON.parse(response);
          res.render('response', {
            'data': _result
          })
        });
      });

      // post the data
      post_req.write(post_data);
      post_req.end();
    });
  });
})



// async function pay() {
//   try {
//     let post_data = qs.parse(body);
//     var checksumhash = post_data.CHECKSUMHASH;
//     // delete post_data.CHECKSUMHASH;
//     var result = checksum_lib.verifychecksum(
//       post_data,
//       config.PaytmConfig.key,
//       checksumhash
//     );
//     var params = { MID: "MACHEN27230008377876", ORDERID: "order_01" };

//     checksum_lib.genchecksum(
//       params,
//       "Z%3jQs5mgm9T5Uhm",
//       function (err, checksum) {
//         params.CHECKSUMHASH = checksum;
//         post_data = "JsonData=" + JSON.stringify(params);

//         var options = {
//           hostname: "securegw-stage.paytm.in", // for staging
//           // hostname: 'securegw.paytm.in', // for production
//           port: 443,
//           path: "/merchant-status/getTxnStatus",
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             "Content-Length": post_data.length,
//           },
//         };
//         console.log("Checksum Result => ", result, "\n");
//         var response = "";
//         var post_req = https.request(options, function (post_res) {
//           post_res.on("data", function (chunk) {
//             response += chunk;
//           });

//           post_res.on("end", function () {
//             console.log("S2S Response: ", response, "\n");

//             var _result = JSON.parse(response);
//             if (_result.STATUS == "TXN_SUCCESS") {
//               res.send("payment sucess");
//             } else {
//               res.send("payment failed");
//             }
//           });
//         });

//         // post the data
//         post_req.write(post_data);
//         post_req.end();
//       }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }




async function get3Models(req, res) {
  try {
    const products = await ProductModel.find();
    let newModel = products.slice(0, 3);
    // console.log(newModel);
    console.log("3");
    res.status(200).send(newModel);
  } catch (er) {
    console.log(er);
    res.send(err);
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "product deleted" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getProductById(req, res) {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    // if (product) {
    //   let text = product.productImage1.base64.toString("ascii");
    //   console.log(text);
    // }
    // console.log(product);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await ProductModel.find();
    res.send(products);
    // console.log(products);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function createProduct(req, res) {
  console.log("caled");
  try {
    const files = req.files;
    console.log(req.files["cover-image"]);

    if (!files) {
      res.status(400).send("please upload files");
    }

    let imgArray = files["product-images"].map((file) => {
      // console.log(file);
      let img = fs.readFileSync(file.path);

      return (encode_image = img.toString("base64"));
    });

    let imgArr2 = files["cover-image"].map((file) => {
      let img = fs.readFileSync(file.path);

      return (encode_image = img.toString("base64"));
    });

    // console.log(imgArray.length);

    // imgArray.map(src,idx=>{
    //     let
    // })
    // console.log(imgArray);

    const newProduct = new ProductModel({
      userId: req.userId,
      productTitle: req.body.productTitle,
      productDesc: req.body.productDesc,
      productPrice: req.body.productPrice,
      productLink: req.body.productLink,
      // coverImage:req.,
      productImage1: {
        fileName: files["product-images"].length
          ? files["product-images"][0]
            ? files["product-images"][0].filename
            : ""
          : "",
        base64: imgArray.length ? imgArray[0] : "",
      },
      productImage2: {
        fileName: files["product-images"].length
          ? files["product-images"][1]
            ? files["product-images"][1].filename
            : ""
          : "",
        base64: imgArray.length ? imgArray[1] : "",
      },
      productImage3: {
        fileName: files["product-images"].length
          ? files["product-images"][2]
            ? files["product-images"][2].filename
            : ""
          : "",
        base64: imgArray.length ? imgArray[2] : "",
      },
      productImage4: {
        fileName: files["product-images"].length
          ? files["product-images"][3]
            ? files["product-images"][3].filename
            : ""
          : "",
        base64: imgArray.length ? imgArray[3] : "",
      },
      coverImage: {
        fileName: files["cover-image"].length
          ? files["cover-image"][0]
            ? files["cover-image"][0].fileName
            : ""
          : "",
        base64: imgArr2[0],
      },
    });

    const createProduct = await newProduct.save();
    res.status(200).send(createProduct);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

module.exports = router;
