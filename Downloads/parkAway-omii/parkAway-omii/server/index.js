require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const cors = require("cors");
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const port = 3001 || process.env.PORT
const multer = require("multer")
const twilio = require('twilio');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(cors())
app.use(express.json())

const accountSid = 'AC8bb324884f6fe399ceecffae6a6c9b55';
const authToken = '4336e6ac85be70f3cd744fcb03fce7a9'; 
const client = new twilio(accountSid, authToken);



app.get('/send-text', (req, res) => {
  //Welcome Message
  res.send('Hello to the Twilio Server')

  //_GET Variables
  const { textmessage, texternumber, carCompany, floorArea, location } = req.query;


  //Send Text
  client.messages.create({
      body: textmessage + texternumber + carCompany + floorArea + location,
      to: '+16395712428',  // Text this number
      from: '+19897560563' // From a valid Twilio number
  }).then((message) => console.log(message.body));
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname);
    },
  });
const upload = multer({ storage: storage });


app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
          from: process.env.TO_NUMBER,
          to: process.env.FROM_NUMBER,
          body: "Yes its working"
      })
		.then((message) => console.log(message.body))
		
});
app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})



app.post(
    "/create-product",
    upload.fields([
      { name: "cover-image", maxCount: 1 },
    ]),
    createProduct
  );


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
        productTitle: req.body.name,
        productPrice: req.body.price,
        email: req.body.email,
        // coverImage:req.,
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

app.listen(port, () => {
	console.log('Server started on 3001')
})