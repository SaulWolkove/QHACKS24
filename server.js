require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const PORT = 3001;
const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use(router);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongoose is working, listening on port 3001")
})


app.listen(PORT);

